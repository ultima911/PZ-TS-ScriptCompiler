import { ItemOrReference } from '../items/item/Item';

export interface ItemMap {
    output: ItemOrReference;
    input: ItemOrReference;
}

export type ItemMaps = ItemMap[] | { [key: number]: ItemMap };

/**
 * Type that allows access to a Mapper either via simple string or an existing Mapper object.
 */
export type Mapper = ItemMapper | string;

export interface ItemMapper {
    id: string;
    itemMaps: ItemMaps;
}
