import { PZModule } from '../modules/PZModule';
import { Item } from './Item';
import { FoodProps } from './itemProps/FoodProps';

export interface Food extends FoodProps {}

export class Food extends Item {
    constructor(id: string, module?: PZModule, props?: FoodProps) {
        super(id, module, props);
        this.type = props?.type || 'Food';
    }
}
