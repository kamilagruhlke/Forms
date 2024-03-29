import { FormValue } from './../Interfaces/FormValue';
import { FormsStorage } from './../Storage/FormsStorage';
import { TextAreaField } from './../Fields/TextAreaField';
import { SelectField } from './../Fields/SelectField';
import { CheckboxField } from './../Fields/CheckboxField';
import { EmailField } from './../Fields/EmailField';
import { Field } from "../Interfaces/Field";
import { InputField } from "../Fields/InputField";
import { DateField } from '../Fields/DateField';
import { FieldType } from '../enums/FieldType';
import { Router } from '../Router';
import { FieldLabel } from './FieldLabel';

export class FormCreator {

    private fields: Field[] = [];

    private id: string | null = Router.getParam('id');

    constructor() {
        let id = Router.getParam('id');
        if (id !== null) {
            let formsStorage = new FormsStorage();

            let loadedFields = formsStorage.load(id);
            for(let field of loadedFields) {
                if (field.type === FieldType.InputField) {
                    this.fields.push(new InputField(field.id, field.label, field.value));
                } else if (field.type === FieldType.EmailField) {
                    this.fields.push(new EmailField(field.id, field.label, field.value));
                } else if (field.type === FieldType.DateField) {
                    this.fields.push(new DateField(field.id, field.label, field.value));
                } else if (field.type === FieldType.CheckBoxField) {
                    this.fields.push(new CheckboxField(field.id, field.label, field.value));
                } else if (field.type === FieldType.TextAreaField) {
                    this.fields.push(new TextAreaField(field.id, field.label, field.value));
                } else if (field.type === FieldType.SelectField) {
                    this.fields.push(new SelectField(field.id, field.label, field.value, field.rest));
                }
            }
        }
    }

    public newForm(): void {
        var label = new FieldLabel('input-name', 'Identyfikator pola');
        label.render('Form');

        var inputName = document.createElement("input");
        inputName.className = "form-control";
        inputName.type = "text";
        inputName.id = "input-name";

        document.getElementById('Form').appendChild(inputName);

        var label = new FieldLabel('input-label', 'Nazwa');
        label.render('Form');

        var inputLabel = document.createElement("input");
        inputLabel.className = "form-control";
        inputLabel.type = "text";
        inputLabel.id = "input-label";

        document.getElementById('Form').appendChild(inputLabel);

        var label = new FieldLabel('selected-type', 'Typ');
        label.render('Form');
        
        var selectType = document.createElement("select");
        selectType.className = "form-control";
        selectType.id = "selected-type";
        
        for(let type of ["input", "email", "date", "checkbox", "select", "text-area"]) {
            let option = document.createElement("option");
            option.innerHTML = type;
            selectType.appendChild(option);
        }

        document.getElementById('Form').appendChild(selectType);

        var label = new FieldLabel('input-default-value', 'Wartość domyślna');
        label.render('Form');

        var inputDefaultValue = document.createElement("input");
        inputDefaultValue.className = "form-control";
        inputDefaultValue.type = "text";
        inputDefaultValue.id = "input-default-value";

        document.getElementById('Form').appendChild(inputDefaultValue);

        var button = document.createElement("button");
        button.className = "btn btn-warning btn-margin-top";
        button.innerHTML = "Dodaj";
        button.onclick = () => {
            let name = document.getElementById("input-name") as HTMLInputElement;
            let label = document.getElementById("input-label") as HTMLInputElement;
            let value = document.getElementById("input-default-value") as HTMLInputElement;
            let type = document.getElementById("selected-type") as HTMLSelectElement;

            if (type.value === "input") {
                this.fields.push(new InputField(name.value, label.value, value.value));
            } else if (type.value === "email") {
                this.fields.push(new EmailField(name.value, label.value, value.value));
            } else if (type.value === "date") {
                this.fields.push(new DateField(name.value, label.value, value.value));
            } else if (type.value === "checkbox") {
                this.fields.push(new CheckboxField(name.value, label.value, value.value));
            } else if (type.value === "select") {
                this.fields.push(new SelectField(name.value, label.value, '', value.value.split(',')));
            } else if (type.value === "text-area") {
                this.fields.push(new TextAreaField(name.value, label.value, value.value));
            }

            this.renderFields();
        }

        document.getElementById('Form').appendChild(button);
        
        var container = document.createElement("div");
        container.id = "container";

        document.getElementById('Form').appendChild(container);

        var saveButton = document.createElement("button");
        saveButton.className = "btn btn-success btn-margin-top";
        saveButton.innerHTML = "Zapisz";
        saveButton.onclick = () => {
            this.saveForm();
        }

        document.getElementById('Form').appendChild(saveButton);

        this.renderFields();
    }

    private renderFields(): void {
        document.getElementById('container').innerHTML = "";

        for (let field in this.fields) {
            this.fields[field].render('container');
        }
    }

    public saveForm(): void {
        let formsStorage = new FormsStorage();

        if (this.id !== null) {
            formsStorage.override(this.id, this.getValue());
        } else {
            formsStorage.save(this.getValue());
        }

        location.href = '/form-list.html';
    }

    private getValue(): FormValue[] {
        let values : FormValue[] = [];

        for (let field in this.fields) {
            if(this.fields[field].fieldType === FieldType.SelectField) {
                let selectField = this.fields[field] as SelectField;

                values.push({
                    id: selectField.name,
                    label: selectField.label,
                    type: selectField.fieldType,
                    value: selectField.value,
                    rest: selectField.options
                });
            } else {
                values.push({
                    id: this.fields[field].name,
                    label: this.fields[field].label,
                    type: this.fields[field].fieldType,
                    value: this.fields[field].value,
                    rest: []
                });
            }
        }

        return values;
    }
}