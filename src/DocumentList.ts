import { FileStorage } from "./Storage/FileStorage";

export class DocumentList {
    documentList: string[] = [];

    public getDocumentList(): void {
        this.documentList = new FileStorage().getDocuments();
    }

    public render(): void {
        for(var document of this.documentList) {
            console.log(document);
        }
    }
}