import { Storage } from "../Interfaces/Storage";
import * as fs from 'fs';

export class FileStorage implements Storage {
    saveDocument(dataObject: any): string {
        let id = `/data/document_${new Date().getTime()}.txt`;
        fs.writeFileSync(id, dataObject);
        return id;
    }    
    
    loadDocument(idDocument: string) {
        return fs.readFileSync(idDocument);
    }

    getDocuments(): string[] {
        let files: string[] = [];
        fs.readdir('/data/', (err, files) => {
            files.forEach(file => {
              files.push(file)
            });
        }); 
        
        return files;
    }
}