import { Item } from '../item/Item';

export class ItemMapper {
    id: string;
    outputCount: number;
    rules: ItemMapperRule[];

    constructor(name: string, outputCount: number, rules: ItemMapperRule[]) {
        this.id = name;
        this.outputCount = outputCount;
        this.rules = rules;
    }
}

/**
 * Can include default as an output item.
 */
export class ItemMapperRule {
    outputItem: Item;
    inputItem: Item;

    constructor(outputItem: Item, inputItem: Item) {
        this.outputItem = outputItem;
        this.inputItem = inputItem;
    }
}
