import { PZModule } from '../modules/PZModule';
import { Item } from './Item';
import { DrainableProps } from './itemProps/DrainableProps';

export interface Drainable extends DrainableProps {}

export class Drainable extends Item {
    constructor(id: string, module?: PZModule, props?: DrainableProps) {
        super(id, module, props);
        this.type = props?.type || 'Drainable';
    }
}
