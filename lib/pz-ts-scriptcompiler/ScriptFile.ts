import { CraftRecipe } from './types/craftRecipe/CraftRecipe';
import { AnyItem, Item } from './types/items/item/Item';
import { Model } from './types/model/Model';

export type Script = { [key: string]: Item | CraftRecipe | Model } & {
    imports?: string | string[];
};

/**
 * The contents to include in the script file, such as items, craftRecipes, models, etc...
 */
export interface ScriptFileProps {
    /** The id of the module that will wrap the contents of the script file. */
    moduleId: string;
    /** Optional property, when defined, the name of the generated file will be this, as opposed to copying the exact name of the .ts file. */
    fileName?: string;
    /** The imports to include in the script file. */
    imports?: string | string[];
    /** The {@link AnyItem Items} to include in the script file. */
    items?: { [key: string]: AnyItem };
    /** The {@link CraftRecipe CraftRecipes} to include in the script file. */
    craftRecipes?: { [key: string]: CraftRecipe };
    /** The {@link Model Models} to include in the script file. */
    models?: { [key: string]: Model };
}

export interface ScriptFile extends ScriptFileProps {}

export class ScriptFile {
    /**
     * @see {@link ScriptFileProps}
     */
    constructor(props: ScriptFileProps) {
        this.moduleId = props.moduleId;
        Object.assign(this, props);
    }
}
