import { FormsStorage } from './../Storage/FormsStorage';

export class FormList {
    public render(): void {
        var formList = new FormsStorage().get();

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

        for(var index in formList) {
            tr = document.createElement('tr');
            var td = document.createElement('td');
            td.className = "id-col";
            td.innerHTML = formList[index];

            tr.appendChild(td);

            td = document.createElement('td');

            var link = document.createElement('a');
            link.className = "btn btn-dark";
            link.href = `/form-creator.html?id=${formList[index]}`;
            link.innerHTML = 'Edytuj';

            td.appendChild(link);

            var link = document.createElement('a');
            link.className = "btn btn-dark";
            link.href = `/edit-document.html?formId=${formList[index]}`;
            link.innerHTML = 'Wypełnij';

            td.appendChild(link);

            var button = document.createElement('button');
            button.className = "btn btn-danger";
            button.innerHTML = "Usuń";
            button.onclick = () =>  {
                this.removeForm(formList[index]); 
            }

            td.appendChild(button);
            tr.appendChild(td);

            table.appendChild(tr);
        }

        document.getElementById('Form').appendChild(table);
    }

    public removeForm(id: string): void {
        new FormsStorage().remove(id);
        location.reload();
    }
}