import { Field } from './../Interfaces/Field';
import { FieldType } from '../enums/FieldType';
import { FieldLabel } from '../Components/FieldLabel';

export class DateField implements Field {

    public fieldType: FieldType;
    public name: string;
    public label: string;
    public value: string;
    
    constructor(name: string, label: string, value: string) {
        this.fieldType = FieldType.DateField;
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
        
        var field = document.createElement("input");
        field.id = this.name;
        field.className = "form-control";
        field.name = this.name;
        field.type = 'date';
        field.value = this.value;
        field.onchange = () => {
            let currentValue = (document.getElementsByName(this.name)[0]) as HTMLInputElement;
            this.value = currentValue.value;
        }
        
        formGroup.appendChild(field);
    }
}