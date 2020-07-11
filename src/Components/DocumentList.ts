import { DocumentValue } from './../Interfaces/DocumentValue';
import { DocumentsStorage } from "../Storage/DocumentsStorage";

export class DocumentList {
    public render(): void {
        var documentList = new DocumentsStorage().get();

        var table = document.createElement('table');
        table.className = "table";

        var tr = document.createElement('tr');
        var th = document.createElement('th');
        th.innerHTML = "Id";

        tr.appendChild(th);

        th = document.createElement('th');
        th.innerHTML = "Opcje";

        tr.appendChild(th);

        table.appendChild(tr);

        for(var index in documentList) {
            tr = document.createElement('tr');
            var td = document.createElement('td');
            td.className = "id-col";
            td.innerHTML = documentList[index];

            tr.appendChild(td);

            var link = document.createElement('a');
            link.className = "btn btn-dark";
            link.href = `/edit-document.html?id=${documentList[index]}`;
            link.innerHTML = 'Edytuj';

            var button = document.createElement('button');
            button.className = "btn btn-danger";
            button.innerHTML = "Usuń";
            button.onclick = () =>  {
                this.removeDocument(documentList[index]); 
            }

            td = document.createElement('td');
            td.appendChild(link);
            td.appendChild(button);

            tr.appendChild(td);

            table.appendChild(tr);
        }

        document.getElementById('Form').appendChild(table);
    }

    public removeDocument(id: string): void {
        new DocumentsStorage().remove(id);
        location.reload();
    }
}