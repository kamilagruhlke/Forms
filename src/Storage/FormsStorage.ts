import { FieldType } from './../Enums/FieldType';
import { Storage } from "../Interfaces/Storage";

export class FormsStorage implements Storage<{id: string, label: string, type: FieldType, value: string, rest: string[]}> {

    save(dataObject: any): string {
        let id = `form_${new Date().getTime()}`;

        localStorage.setItem(id, JSON.stringify(dataObject))

        return id;
    }
    
    override(id: string, dataObject: {id: string, label: string, type: FieldType, value: string, rest: string[]}[]): string {
        localStorage.setItem(id, JSON.stringify(dataObject))
        return id;
    }

    load(id: string): {id: string, label: string, type: FieldType, value: string, rest: string[]}[] {
        return JSON.parse(localStorage.getItem(id));
    }

    get(): string[] {
        let files: string[] = [];
        for (let i = 0; i < localStorage.length; i++) {
            if (localStorage.key(i).indexOf('form_') <= -1) {
                continue;
            }

            files.push(localStorage.key(i));
        }
        
        return files;
    }

    remove(id: string): void {
        localStorage.removeItem(id);
    }
}