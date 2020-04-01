import { Field } from "../Interfaces/Field";
import { FieldType } from "../enums/FieldType";

export class EmailField implements Field {
    
    public fieldType: FieldType;
    public name: string;
    public label: string;
    public value: string;
    
    constructor(name: string, label: string, value: string) {
        this.fieldType = FieldType.EmailField;
        this.name = name;
        this.label = label;
        this.value = value;
    }

    public render(): void {
        console.log(this);

        var field = document.createElement("input");
        field.type = 'email';
        
        document.getElementById('Form').appendChild(field)
    }
}