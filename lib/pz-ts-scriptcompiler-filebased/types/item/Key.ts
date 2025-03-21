import { Item } from './Item';

export interface Key extends Item {
    digitalPadlock?: string;
    padlock?: string;
}
