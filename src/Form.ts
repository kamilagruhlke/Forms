import { Field } from './Interfaces/Field';
import { InputField } from './Fields/InputField';
import { EmailField } from './Fields/EmailField';

export class Form {

    private fields: Field[] = [
        new InputField('Imie', 'Imie', ''), 
        new InputField('Nazwisko', 'Nazwisko', ''),
        new EmailField('Email', 'Email', '')
    ];

    getValue(): void {
    }

    render(): void {
        for (let field in this.fields) {
            this.fields[field].render();
        }
    }
}