import { DocumentValue } from './../Interfaces/DocumentValue';
import { DocumentsStorage } from '../Storage/DocumentsStorage';
import { Router } from "../Router";
import { Form } from "./Form";

export class EditDocument {

    public render(): void {
        let document = new DocumentsStorage().load(Router.getParam('id'));
        if (document === null) {
            document = {
                formId: Router.getParam('formId'),
                data: []
            } as DocumentValue;
        }

        let form = new Form(document, Router.getParam('id'));
        form.render();
    }
}