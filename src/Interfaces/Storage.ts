export interface Storage<T> {

    save(dataObject: T[]): string;

    override(id: string, dataObject: T[]): string;

    load(id: string): T[];

    get(): string[];

    remove(id: string): void;
}