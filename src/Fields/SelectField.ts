import { Field } from './../Interfaces/Field';
import { FieldType } from '../enums/FieldType';

export class SelectField implements Field {

    public fieldType: FieldType;
    public name: string;
    public label: string;
    public value: string;
    
    constructor(name: string, label: string, value: string) {
        this.fieldType = FieldType.SelectField;
        this.name = name;
        this.label = label;
        this.value = value;
    }

    public render(): void {
        console.log(this);
    }
}