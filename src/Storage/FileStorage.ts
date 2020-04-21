import { Storage } from "../Interfaces/Storage";

export class FileStorage implements Storage {
    public saveDocument(dataObject: any): string {
        let id = `document_${new Date().getTime()}.txt`;
        localStorage.setItem(id, JSON.stringify(dataObject))
        return id;
    }    
    
    public loadDocument(idDocument: string) {
        return JSON.parse(localStorage.getItem(idDocument));
    }

    public getDocuments(): string[] {
        let files: string[] = [];
        for (var key in localStorage) {
            files.push(key);
        }    
        return files;
    }
}