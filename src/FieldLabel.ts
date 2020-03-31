import { FieldType } from "./enums/FieldType";

export class FieldLabel implements FieldLabel {

    public fieldType: FieldType;
    public name: string;
    public label: string;
    public value: string;
    
    constructor(fieldType: FieldType, name: string, label: string, value: string) {
        this.fieldType = fieldType;
        this.name = name;
        this.label = label;
        this.value = value;
    }

    public render(): void {
        console.log(this);
    }
}