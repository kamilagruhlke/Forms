import { FormValue } from './../Interfaces/FormValue';
import { Storage } from "../Interfaces/Storage";

export class FormsStorage implements Storage<FormValue[]> {

    save(dataObject: FormValue[]): string {
        let id = `form_${new Date().getTime()}`;

        localStorage.setItem(id, JSON.stringify(dataObject))

        return id;
    }
    
    override(id: string, dataObject: FormValue[]): string {
        localStorage.setItem(id, JSON.stringify(dataObject))
        return id;
    }

    load(id: string): FormValue[] {
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