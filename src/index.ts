import { Form } from './Form';
import './main.scss';

var form = new Form();
form.render();

var button = document.createElement('button');
button.innerHTML = "Pobierz wartości";
button.onclick = () => {
    alert(form.getValue());
}

document.body.appendChild(button);