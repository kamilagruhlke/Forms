import { Field } from "../Interfaces/Field";
import { FieldType } from "../enums/FieldType";

export class InputField implements Field {

    public fieldType: FieldType;
    public name: string;
    public label: string;
    public value: string;
    
    constructor(name: string, label: string, value: string) {
        this.fieldType = FieldType.InputField;
        this.name = name;
        this.label = label;
        this.value = value;
    }

    public render(): void {
        console.log(this);
        var field = document.createElement("input");
        field.type = 'text';
        
        document.getElementById('Form').appendChild(field)
    }
}