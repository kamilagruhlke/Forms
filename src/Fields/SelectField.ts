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
        var formGroup = document.createElement('div');
        formGroup.id = 'group-' + this.name;
        formGroup.className = 'form-group';

        document.getElementById(elementId).appendChild(formGroup);

        var label = new FieldLabel(this.name, this.label);
        label.render(formGroup.id);

        var field = document.createElement("select");
        field.id = this.name;
        field.className = "form-control";
        field.name = this.name;
        field.value = this.value;
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
        
        formGroup.appendChild(field);
    }
}