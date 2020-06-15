import { FieldType } from './../enums/FieldType';

export interface Field {
    fieldType: FieldType;
    name: string;
    label: string;
    value: string;

    render(elementId: string): void;
}