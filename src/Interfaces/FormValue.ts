import { FieldType } from "../enums/FieldType";

export interface FormValue {
    id: string, 
    label: string, 
    type: FieldType, 
    value: string, 
    rest: string[]
}