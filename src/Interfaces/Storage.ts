export interface Storage {

    saveDocument(dataObject: any): string;

    loadDocument(idDocument: string): any;

    getDocuments(): string[];
}