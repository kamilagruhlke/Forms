import { Field } from './../Interfaces/Field';
import { FieldType } from '../enums/FieldType';
import { FieldLabel } from '../FieldLabel';

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

    public render(): void {
        var label = new FieldLabel(this.name, this.label);
        label.render();
        
        var field = document.createElement("textarea");
        field.name = this.name;
        field.value = this.value;
        field.onchange = () => {
            let currentValue = (document.getElementsByName(this.name)[0]) as HTMLTextAreaElement;
            this.value = currentValue.value;
        }
        
        document.getElementById('Form').appendChild(field)
    }
}