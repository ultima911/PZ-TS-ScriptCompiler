import { Tags } from '../item/Tags';
import { Category } from './Categories';
import { CraftRecipeInput } from './CraftRecipeInput';
import { CraftRecipeTag } from './CraftRecipeTags';
import { ItemMapper } from './ItemMapper';
import { TimedAction } from './TimedAction';
import { SkillLevelOrXp } from './SkillLevelOrXp';

export interface CraftRecipe {
    /** (TODO) Custom field that will populate the translate files for the recipe name (TODO) */
    recipeTitle?: string; // TODO

    /** Time to craft the item. */
    time: number;

    /**
     * @example1
     * ```ts
     * inputs: {
     *  1: input1,
     *  2: input2,
     * },
     * ```
     * @example2
     * ```ts
     * inputs: [ input1, input2 ],
     * ```
     */
    inputs: {
        [key: number]: CraftRecipeInput;
    };

    /**
     * @example1
     * ```ts
     * outputs: {
     *  1: output1,
     *  2: output2,
     * },
     * ```
     * @example2
     * ```ts
     * outputs: [ output1, output2 ],
     * ```
     */
    outputs: {
        [key: number]: string;
    };
    /** Allows to define an item mapping for input items to create a specific output item. */
    itemMappers?: ItemMapper | ItemMapper[]; // TODO - Make sure that the compiler checks for all itemMapper stuff!!!
    /** Specifies animation played during the crafting process. */
    timedAction?: TimedAction;
    /** Specifies the category of the crafting recipe. This helps to organize and identify recipes in the crafting menu. */
    category?: Category;
    /** Specifies specific conditions which need to be respected to craft this item. */
    Tags?: CraftRecipeTag | CraftRecipeTag[];
    /** Description of the crafting which is shown in the crafting menu. */
    ToolTip?: string; // TODO Make this work with recipeTitle above!!!
    /** Specifies the icon associated with this crafting recipe. */
    Icon?: string; // TODO allow this to reference an img file!!!
    /** Whenever the crafting recipe is finished, this Lua function will be called. */
    OnCreate?: string; // TODO allow this to reference a library that imports vanilla functions???
    /** Used to verify if the recipe can be crafted. */
    OnTest?: string; // TODO allow this to reference a library that imports vanilla functions???
    /** Specifies the experience points awarded for crafting this item. */
    xpAward?: SkillLevelOrXp;
    /** Specifies the skill level required to perform this crafting action. */
    SkillRequired?: SkillLevelOrXp;
    /** Should the player learn the recipe before being able to craft it. */
    needToBeLearn?: boolean;
    /** All the skills and their required level need to be reached to learn the recipe, not be be confused with AutoLearnAny. */
    AutoLearnAll?: SkillLevelOrXp;
    /** Only one of the listed skills and their required level needs to be reached to learn the recipe, not be confused with AutoLearnAll. */
    AutoLearnAny?: SkillLevelOrXp;
    /** A meta recipe is used to link two recipes so that if the meta recipe is known then the main recipe is known. */
    MetaRecipe?: CraftRecipe | string;
    /** Allows the recipe to be crafted in batches. */
    AllowBatchCraft?: boolean;
    /** Recipes can use fluids. */
    Fluids?: string;
}

const test = {
    time: 12,
    inputs: [
        {
            tags: [Tags.AlcoholicBeverage],
            amount: 1,
            mode: 'keep',
            mappers: ['test'],
        } as CraftRecipeInput,
    ],
    outputs: [],
} as CraftRecipe;
