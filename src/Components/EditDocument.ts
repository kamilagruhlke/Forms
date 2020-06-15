import { DocumentsStorage } from '../Storage/DocumentsStorage';
import { Router } from "../Router";
import { Form } from "./Form";

export class EditDocument {

    idDocument: string = Router.getParam('id');

    public render(): void {
        let document = new DocumentsStorage().load(this.idDocument);

        let form = new Form(document, this.idDocument);
        form.render();
    }
}