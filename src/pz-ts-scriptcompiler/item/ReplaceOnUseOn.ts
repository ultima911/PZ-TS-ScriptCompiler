import Item from "./Item";

export class ReplaceOnUseOn {
    source: Item;
    result: Item;

    constructor(source: Item, result: Item) {
        this.source = source;
        this.result = result;
    }

    public toString = (): string => {
        return `${this.source}-${this.result}`
    }
}