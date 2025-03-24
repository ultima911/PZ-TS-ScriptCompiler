import { Tag } from '../items/item/Tags';
import { ItemOrReference } from '../items/item/Item';
import { Flag } from './Flags';
import { Mapper } from './ItemMapper';

export interface CraftRecipeBaseInput {
    amount: number;
    mode?: 'keep' | 'destroy';
    mappers?: Mapper | Mapper[];
    flags?: Flag[];
}

export interface CraftRecipeItemInput {
    items: ItemOrReference[];
    tags: never;
    fluid: never;
    fluids: never;
}

export interface CraftRecipeTagInput {
    tags: Tag[];
    items: never;
    fluid: never;
    fluids: never;
}

export interface CraftRecipeFluidInput {
    fluid: string;
    items: never;
    tags: never;
    fluids: never;
}

export interface CraftRecipeFluidsInput {
    fluids: string[];
    items: never;
    tags: never;
    fluid: never;
}

export type CraftRecipeInput = CraftRecipeBaseInput & (CraftRecipeItemInput | CraftRecipeTagInput);
