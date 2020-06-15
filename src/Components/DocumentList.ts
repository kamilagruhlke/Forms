import { DocumentsStorage } from "../Storage/DocumentsStorage";

export class DocumentList {
    public render(): void {
        var documentList = new DocumentsStorage().get();

        for(var index in documentList) {

            var element = document.createElement('div');

            var link = document.createElement('a');
            link.href = `/edit-document.html?id=${documentList[index]}`;
            link.innerHTML = documentList[index];

            var button = document.createElement('button');
            button.innerHTML = "Usuń";
            button.onclick = () =>  {
                this.removeDocument(documentList[index]); 
            }

            element.appendChild(link);
            element.appendChild(button);

            document.getElementById('Form').appendChild(element);
        }
    }

    public removeDocument(id: string): void {
        new DocumentsStorage().remove(id);
        location.reload();
    }
}