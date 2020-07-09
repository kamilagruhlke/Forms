import { DocumentValue } from '../Interfaces/DocumentValue';
import { Storage } from "../Interfaces/Storage";

export class DocumentsStorage implements Storage<DocumentValue> {

    public save(dataObject: DocumentValue): string {
        let id = `document_${new Date().getTime()}`;

        localStorage.setItem(id, JSON.stringify(dataObject))

        return id;
    }   
    
    public override(id: string, dataObject: DocumentValue): string {
        localStorage.setItem(id, JSON.stringify(dataObject))
        return id;
    }
    
    public load(idDocument: string) : DocumentValue {
        return JSON.parse(localStorage.getItem(idDocument));
    }

    public get(): string[] {
        let files: string[] = [];
        for (let i = 0; i < localStorage.length; i++) {
            if (localStorage.key(i).indexOf('document_') <= -1) {
                continue;
            }

            files.push(localStorage.key(i));
        }
        
        return files;
    }

    public remove(idDocument: string): void {
        localStorage.removeItem(idDocument);
    }
}