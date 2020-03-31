import { FieldType } from './enums/FieldType';
import { FieldLabel } from './FieldLabel';
import './main.scss';

const hello = "yep, it's working";
document.body.innerHTML = hello;

var fieldLabel = new FieldLabel(FieldType.TextField, "test", "test", "test");

fieldLabel.render();