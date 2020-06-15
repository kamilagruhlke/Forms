import { Field } from './../Interfaces/Field';
import { FieldType } from '../enums/FieldType';
import { FieldLabel } from '../Components/FieldLabel';

export class SelectField implements Field {

    public fieldType: FieldType;
    public name: string;
    public label: string;
    public value: string;
    public options: string[];
    
    constructor(name: string, label: string, value: string, options: string[]) {
        this.fieldType = FieldType.SelectField;
        this.name = name;
        this.label = label;
        this.value = value;
        this.options = options;
    }

    public render(elementId: string): void {
        var label = new FieldLabel(this.name, this.label);
        label.render(elementId);

        var field = document.createElement("select");
        field.name = this.name;
        field.value = this.value;
        field.className = "selectField";
        field.onchange = () => {
            let currentValue = (document.getElementsByName(this.name)[0]) as HTMLSelectElement;
            this.value = currentValue.value;
        }

        for(let i in this.options) {
            let option = document.createElement('option');
            option.value = this.options[i];
            option.innerHTML = this.options[i];

            field.appendChild(option);
        }
        
        document.getElementById(elementId).appendChild(field)

        var br = document.createElement('br');
        document.getElementById(elementId).appendChild(br)
        br = document.createElement('br');
        document.getElementById(elementId).appendChild(br)
    }
}