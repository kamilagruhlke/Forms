import { Storage } from "../Interfaces/Storage";

export class FileStorage implements Storage {
    saveDocument(dataObject: any): string {
        let id = `document_${new Date().getTime()}.txt`;
        localStorage.setItem(id, JSON.stringify(dataObject))
        return id;
    }    
    
    loadDocument(idDocument: string) {
        return JSON.parse(localStorage.getItem(idDocument));
    }

    getDocuments(): string[] {
        let files: string[] = [];
        for (var key in localStorage) {
            files.push(key);
        }    
        return files;
    }
}