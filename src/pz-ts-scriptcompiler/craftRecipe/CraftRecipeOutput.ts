import Item from "../item/Item";
import { ItemMapper } from "./ItemMapper";

export type CraftRecipeOutput = CraftRecipeOutputID | CraftRecipeOutputMapper;

export interface CraftRecipeOutputBase {
    count: number;
}

export class CraftRecipeOutputID implements CraftRecipeOutputBase {
    count: number;
    item: Item;
  
    constructor(count: number, item: Item) {
      this.count = count;
      this.item = item;
    }
}

export class CraftRecipeOutputMapper implements CraftRecipeOutputBase {
    count: number;
    mapper: ItemMapper;
  
    constructor(mapper: ItemMapper) {
      this.mapper = mapper;
      this.count = mapper.outputCount;
    }
}
  