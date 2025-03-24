import { Item } from './item/Item';

export interface Moveable extends Item {
    worldObjectSprite?: string;
}
