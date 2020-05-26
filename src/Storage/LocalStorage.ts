import { Storage } from "../Interfaces/Storage";

export class LocalStorage implements Storage {
    public saveDocument(dataObject: any): string {
        let id = `document_${new Date().getTime()}`;

        localStorage.setItem(id, JSON.stringify(dataObject))

        return id;
    }    
    
    public loadDocument(idDocument: string) {
        return JSON.parse(localStorage.getItem(idDocument));
    }

    public getDocuments(): string[] {
        let files: string[] = [];
        for (let i = 0; i < localStorage.length; i++) {
            if (localStorage.key(i).indexOf('document_') <= -1) {
                continue;
            }

            files.push(localStorage.key(i));
        }
        
        return files;
    }
}