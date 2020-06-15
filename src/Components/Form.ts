import { Field } from '../Interfaces/Field';
import { InputField } from '../Fields/InputField';
import { EmailField } from '../Fields/EmailField';
import { SelectField } from '../Fields/SelectField';
import { CheckboxField } from '../Fields/CheckboxField';
import { TextAreaField } from '../Fields/TextAreaField';
import { DocumentsStorage } from "../Storage/DocumentsStorage";

export class Form {

    constructor(data: {key: string, value: string}[], private id: string = null) {
        if (data !== null) {
            for(var d of data) {
                for(var field of this.fields) {
                    if (field.name === d.key) {
                        field.value = d.value;
                    }
                }
            }
        }
    }

    private fields: Field[] = [
        new InputField('imie', 'Imie: ', ''), 
        new InputField('nazwisko', 'Nazwisko: ', ''),
        new EmailField('email', 'Email: ', ''),
        new SelectField('kierunek-studiow', 'Kierunek studiów: ', '', ['wsei', 'agh', 'pwsz']),
        new CheckboxField('e-learning', 'E-learning: ', ''),
        new TextAreaField('uwagi', 'Uwagi: ', '')
    ];

    getValue(): {key: string, value: string}[] {
        let values : {key: string, value: string}[] = [];

        for (let field in this.fields) {
            values.push({
                key: this.fields[field].name,
                value: this.fields[field].value
            });
        }

        return values;
    }

    render(): void {

        for (let field in this.fields) {
            this.fields[field].render('Form');
        }

        var button = document.createElement('button');
        button.innerHTML = "Zapisz";
        button.className = "button";
        button.onclick = () => {
            const localStorage = new DocumentsStorage();

            if (this.id !== null) {
                localStorage.override(this.id, this.getValue());
                window.location.href = '/document-list.html';
            }
            else {
                localStorage.save(this.getValue());
                window.location.href = '/index.html';
            }
        }

        document.getElementById('Form').appendChild(button);

        button = document.createElement('button');
        button.innerHTML = "Wstecz";
        button.className = "button";
        button.onclick = () => {
            window.location.href = '/index.html';
        }

        document.getElementById('Form').appendChild(button);
    }
}