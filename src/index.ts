import { Form } from './Form';
import './main.scss';

var form = new Form();
form.render();

var button = document.createElement('button');
button.innerHTML = "Pobierz wartości";
button.className = "button";
button.onclick = () => {
    alert(form.getValue());
}

document.getElementById('Form').appendChild(button);