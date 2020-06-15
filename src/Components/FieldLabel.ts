export class FieldLabel {

    public name: string;
    public label: string;
    
    constructor(name: string, label: string) {
        this.name = name;
        this.label = label;
    }

    public render(elementId: string): void {
        var label = document.createElement('label');
        label.htmlFor = this.name;
        label.innerHTML = this.label;

        document.getElementById(elementId).appendChild(label);
    }
}