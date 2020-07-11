import { DocumentValue } from './../Interfaces/DocumentValue';
import { Field } from '../Interfaces/Field';
import { InputField } from '../Fields/InputField';
import { EmailField } from '../Fields/EmailField';
import { SelectField } from '../Fields/SelectField';
import { CheckboxField } from '../Fields/CheckboxField';
import { TextAreaField } from '../Fields/TextAreaField';
import { DocumentsStorage } from "../Storage/DocumentsStorage";
import { FieldType } from '../enums/FieldType';
import { FormsStorage } from '../Storage/FormsStorage';
import { DateField } from '../Fields/DateField';

export class Form {

    private formId: string | null = null;

    constructor(documentValue: DocumentValue, private id: string = null) {
        if (documentValue.formId !== null) {
            this.formId = documentValue.formId;

            let formsStorage = new FormsStorage();

            let loadedFields = formsStorage.load(documentValue.formId);
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
        
        if (documentValue.data !== null) {
            for(var d of documentValue.data) {
                for(var field of this.fields) {
                    if (field.name === d.key) {
                        field.value = d.value;
                    }
                }
            }
        }
    }

    private fields: Field[] = [];

    getValue(): DocumentValue {
        let documentValue : DocumentValue = {
            formId: this.formId,
            data: []
        }

        for (let field in this.fields) {
            documentValue.data.push({
                key: this.fields[field].name,
                value: this.fields[field].value
            });
        }

        return documentValue;
    }

    render(): void {

        for (let field in this.fields) {
            this.fields[field].render('Form');
        }

        var button = document.createElement('button');
        button.innerHTML = "Zapisz";
        button.className = "btn btn-success";
        button.onclick = () => {
            const localStorage = new DocumentsStorage();

            if (this.id !== null) {
                localStorage.override(this.id, this.getValue());
                window.location.href = '/index.html';
            }
            else {
                localStorage.save(this.getValue());
                window.location.href = '/index.html';
            }
        }

        document.getElementById('Form').appendChild(button);

        button = document.createElement('button');
        button.innerHTML = "Wstecz";
        button.className = "btn btn-dark";
        button.onclick = () => {
            window.location.href = '/index.html';
        }

        document.getElementById('Form').appendChild(button);
    }
}