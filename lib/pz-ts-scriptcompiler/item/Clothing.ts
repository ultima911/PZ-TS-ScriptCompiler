import { PZModule } from '../modules/PZModule';
import { Item } from './Item';
import { ClothingProps } from './itemProps/ClothingProps';

export interface Clothing extends ClothingProps {}

export class Clothing extends Item {
    constructor(id: string, module?: PZModule, props?: ClothingProps) {
        super(id, module, props);
        this.type = props?.type || 'Clothing';
    }
}
