import { CraftRecipe } from './types/craftRecipe/CraftRecipe';
import { Item } from './types/item/Item';
import { Model } from './types/model/Model';

export type ScriptFileProps = { [key: string]: Item | CraftRecipe | Model } & {
    imports?: string[];
};

export class ScriptFile {
    readonly moduleId: string;
    readonly imports?: string[];
    readonly [key: string]: Item | CraftRecipe | Model | string | string[] | undefined;
    constructor(moduleId: string, props: ScriptFileProps) {
        this.moduleId = moduleId;
        Object.assign(this, props);
    }
}
