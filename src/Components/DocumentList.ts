import { LocalStorage } from "../Storage/LocalStorage";

export class DocumentList {
    public render(): void {
        let documentList = new LocalStorage().getDocuments();

        for(var item of documentList) {
            let element = document.createElement('div');
            element.innerHTML = item;

            document.getElementById('Form').appendChild(element);
        }
    }
}