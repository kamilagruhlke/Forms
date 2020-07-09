import { DocumentValue } from './../Interfaces/DocumentValue';
import { Form } from '../Components/Form';
import './main.scss';

var form = new Form({data:[]} as DocumentValue);
form.render();