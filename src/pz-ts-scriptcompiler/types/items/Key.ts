import { Item } from '../item/Item';

export interface Key extends Item {
    digitalPadlock?: string;
    padlock?: string;
}
