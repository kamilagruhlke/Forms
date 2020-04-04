import { Field } from './../Interfaces/Field';
import { FieldType } from '../enums/FieldType';
import { FieldLabel } from '../FieldLabel';

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

    public render(): void {
        var label = new FieldLabel(this.name, this.label);
        label.render();

        var field = document.createElement("input");
        field.name = this.name;
        field.type = 'checkbox';
        field.value = this.value;
        field.onchange = () => {
            let currentValue = (document.getElementsByName(this.name)[0]) as HTMLInputElement;
            this.value = currentValue.checked.toString();
        }
        
        document.getElementById('Form').appendChild(field)
    }
}