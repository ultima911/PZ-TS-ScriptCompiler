import { Item } from '../item/Item';

export interface Map extends Item {
    map?: string;
    staticModel?: string;
}
