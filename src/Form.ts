import { Field } from './Interfaces/Field';
import { InputField } from './Fields/InputField';
import { EmailField } from './Fields/EmailField';
import { SelectField } from './Fields/SelectField';
import { CheckboxField } from './Fields/CheckboxField';
import { TextAreaField } from './Fields/TextAreaField';

export class Form {

    private fields: Field[] = [
        new InputField('imie', 'Imie: ', ''), 
        new InputField('nazwisko', 'Nazwisko: ', ''),
        new EmailField('email', 'Email: ', ''),
        new SelectField('kierunek-studiow', 'Kierunek studiów: ', '', ['wsei', 'agh', 'pwsz']),
        new CheckboxField('e-learning', 'E-learning: ', ''),
        new TextAreaField('uwagi', 'Uwagi: ', '')
    ];

    getValue(): string[] {
        let values : string[] = [];

        for (let field in this.fields) {
            values.push(this.fields[field].value);
        }

        return values;
    }

    render(): void {
        for (let field in this.fields) {
            this.fields[field].render();
        }
    }
}