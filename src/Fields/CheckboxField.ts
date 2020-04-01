import { Field } from './../Interfaces/Field';
import { FieldType } from '../enums/FieldType';

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
        console.log(this);
    }
}