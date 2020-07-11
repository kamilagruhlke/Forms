import { Field } from './../Interfaces/Field';
import { FieldType } from '../enums/FieldType';
import { FieldLabel } from '../Components/FieldLabel';

export class CheckboxField implements Field {

    public fieldType: FieldType;
    public name: string;
    public label: string;
    public value: string;
    
    constructor(name: string, label: string, value: string) {
        this.fieldType = FieldType.CheckBoxField;
        this.name = name;
        this.label = label;
        this.value = value;
    }

    public render(elementId: string): void {
        var formCheck = document.createElement('div');
        formCheck.id = 'group-' + this.name;
        formCheck.className = 'form-check';

        var field = document.createElement("input");
        field.id = this.name;
        field.className = "form-check-input";
        field.name = this.name;
        field.type = 'checkbox';
        field.value = this.value;
        field.onchange = () => {
            let currentValue = (document.getElementsByName(this.name)[0]) as HTMLInputElement;
            this.value = currentValue.checked.toString();
        }

        formCheck.appendChild(field);

        document.getElementById(elementId).appendChild(formCheck);

        var label = new FieldLabel(this.name, this.label, 'form-check-label');
        label.render(formCheck.id);
    }
}