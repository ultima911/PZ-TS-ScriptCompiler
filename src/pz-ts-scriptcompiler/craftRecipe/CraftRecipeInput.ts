import Item from "../item/Item";
import { Tag } from "../item/Tag";
import { ItemMapper } from "./ItemMapper";

export type CraftRecipeInput = CraftRecipeInputID | CraftRecipeInputTag;
export type InputMode = 'keep' | 'destroy';

export abstract class CraftRecipeInputBase {
    count: number;
    mode?: InputMode;
    mapper?: ItemMapper;
  
    constructor(count: number, mode?: InputMode, mappers?: ItemMapper) {
      this.count = count;
      this.mode = mode;
      this.mapper = mappers;
    }
}

export class CraftRecipeInputID extends CraftRecipeInputBase {
    items: Item[];
  
    constructor(count: number, items: Item[], mode?: InputMode, mapper?: ItemMapper) {
      super(count, mode, mapper);
      this.items = items;
    }
}

export class CraftRecipeInputTag extends CraftRecipeInputBase {
    tags: Tag[];
  
    constructor(count: number, tags: Tag[], mode?: InputMode, mapper?: ItemMapper) {
      super(count, mode, mapper);
      this.tags = tags;
    }
}
