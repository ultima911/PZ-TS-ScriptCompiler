import { CraftRecipeInput } from "./CraftRecipeInput";
import { CraftRecipeOutput, CraftRecipeOutputMapper } from "./CraftRecipeOutput";
import { ItemMapper } from "./ItemMapper";

/** @link https://pzwiki.net/wiki/CraftRecipe */
export interface CraftRecipeProps {
  id: string;
  /** The text that this recipe will display in game. */
  recipeTitle?: string;
  time: number;
  /** The ingredients needed to crafting the item. See {@link https://pzwiki.net/wiki/CraftRecipe#inputs} for the detail. Will usually involve a combination of items, tags, modes or mappers of consumption of the crafting ingredients. */
  inputs: CraftRecipeInput[];
  outputs: CraftRecipeOutput[];
  timedAction?: string; // TODO
  category?: string; // TODO
  tags?: string; // TODO
  tooltip?: string; // TODO
  icon?: string; // TODO
  onCreate?: string; // TODO
  onTest?: string; // TODO
  xpAward?: string; // TODO
  skillRequired?: string; // TODO
  needToBeLearn?: string; // TODO
  autoLearnAll?: string; // TODO
  autoLearnAny?: string; // TODO
  metaRecipe?: string; // TODO
  allowBatchCraft?: string; // TODO
}

export default class CraftRecipe implements CraftRecipeProps {
  id: string;
  recipeTitle?: string; // TODO
  time: number;
  inputs: CraftRecipeInput[];
  outputs: CraftRecipeOutput[];
  timedAction?: string; // TODO
  category?: string; // TODO
  tags?: string; // TODO
  tooltip?: string; // TODO
  icon?: string; // TODO
  onCreate?: string; // TODO
  onTest?: string; // TODO
  xpAward?: string; // TODO
  skillRequired?: string; // TODO
  needToBeLearn?: string; // TODO
  autoLearnAll?: string; // TODO
  autoLearnAny?: string; // TODO
  metaRecipe?: string; // TODO
  allowBatchCraft?: string; // TODO
  readonly itemMappers?: ItemMapper[];

  constructor(props: CraftRecipeProps) {
    this.id = props.id;
    this.time = props.time;
    this.inputs = props.inputs;
    this.itemMappers = this.getItemMappersFromInputs(props.inputs);
    this.outputs = this.mergeItemMapperOutputsIntoOutputs(this.itemMappers, props.outputs);
  }

  getItemMappersFromInputs(inputs: CraftRecipeInput[]) {
    const mappers: ItemMapper[] = [];
    inputs.forEach((input: CraftRecipeInput) => input.mapper ?? mappers.push());
    if (mappers.length! > 0) return undefined;
    return mappers;
  }

  mergeItemMapperOutputsIntoOutputs(itemMappers?: ItemMapper[], outputs?: CraftRecipeOutput[]) {
    if ((!itemMappers || itemMappers.length === 0) && (!outputs || outputs.length === 0)) {
      throw new Error(`Error merging outputs - CraftRecipe: ${this.id} was passed no itemMappers or outputs!`);
    }

    return [
      ...(outputs ?? []),
      ...(itemMappers?.map((mapper: ItemMapper) => new CraftRecipeOutputMapper(mapper)) ?? []),
    ];
  }
}
