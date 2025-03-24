import { ItemOrReference } from '../items/item/Item';
import { Mapper } from './ItemMapper';

export interface CraftRecipeBaseOutput {
    quantity: number;
    //flags?: Flag[]; - This technically is enabled per the wiki but no vanilla examples
}

export interface CraftRecipeItemOutput {
    item: ItemOrReference;
}

export interface CraftRecipeMapperOutput {
    mapper: Mapper;
}

export type CraftRecipeOutput = CraftRecipeBaseOutput & (CraftRecipeItemOutput | CraftRecipeMapperOutput);
