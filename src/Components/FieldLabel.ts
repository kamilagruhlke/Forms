export class FieldLabel {

    public name: string;

    public label: string;

    public defaultClassName: string;
    
    constructor(name: string, label: string, defaultClassName: string = null) {
        this.name = name;
        this.label = label;
        this.defaultClassName = defaultClassName;
    }

    public render(elementId: string): void {
        var label = document.createElement('label');
        if (this.defaultClassName !== null) {
            label.className = this.defaultClassName;
        }
        label.htmlFor = this.name;
        label.innerHTML = this.label;

        document.getElementById(elementId).appendChild(label);
    }
}