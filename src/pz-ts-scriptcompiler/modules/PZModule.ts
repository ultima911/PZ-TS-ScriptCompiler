import CraftRecipe from '../craftRecipe/CraftRecipe';
import Item from '../item/Item';
import { Model } from '../model/Model';

export interface PZModuleProps {
    readonly id: string;
    imports: PZModule[];
    items: Item[];
    craftRecipes: CraftRecipe[];
    models: Model[];
}

/**
 * Extend this class for new modules.
 */
export class PZModule implements PZModuleProps {
    readonly id: string;
    imports: PZModule[] = [];
    items: Item[] = [];
    craftRecipes: CraftRecipe[] = [];
    models: Model[] = [];

    constructor(moduleName: string, props?: PZModuleProps) {
        this.id = moduleName;
        Object.assign(this, props)
    }

    public get hasImports(): boolean { return this.imports.length > 0 }
    public get hasItems(): boolean { return this.items.length > 0 }
    public get hasCraftRecipes(): boolean { return this.craftRecipes.length > 0 }
    public get hasModels(): boolean { return this.models.length > 0 }

    public addItem(item: Item) {
        const alreadyContains = this.items.findIndex((item2) => item2.id === item.id) !== -1;
        if (alreadyContains) {
            console.error(`Tried adding existing item: ${item.id} to module: ${this.name}`);
        } else {
            this.items.push(item);
        }
    }

    public addItems(...items: Item[]) {
        items.forEach((item) => {this.addItem(item)});
    }

    get name() { return this.id; }
}
