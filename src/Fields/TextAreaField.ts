import { Field } from './../Interfaces/Field';
import { FieldType } from '../enums/FieldType';
import { FieldLabel } from '../Components/FieldLabel';

export class TextAreaField implements Field {

    public fieldType: FieldType;
    public name: string;
    public label: string;
    public value: string;
    
    constructor(name: string, label: string, value: string) {
        this.fieldType = FieldType.TextAreaField;
        this.name = name;
        this.label = label;
        this.value = value;
    }

    public render(elementId: string): void {
        var formGroup = document.createElement('div');
        formGroup.id = 'group-' + this.name;
        formGroup.className = 'form-group';

        document.getElementById(elementId).appendChild(formGroup);

        var label = new FieldLabel(this.name, this.label);
        label.render(formGroup.id);
        
        var field = document.createElement("textarea");
        field.id = this.name;
        field.className = "form-control";
        field.name = this.name;
        field.value = this.value;
        field.onchange = () => {
            let currentValue = document.getElementById(this.name) as HTMLTextAreaElement;
            this.value = currentValue.value;
        }
        
        formGroup.appendChild(field);
    }
}