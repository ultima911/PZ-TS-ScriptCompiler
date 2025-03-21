import { PZModule } from '../modules/PZModule';
import { Item } from './Item';
import { KeyProps } from './itemProps/KeyProps';

export interface Key extends KeyProps {}

export class Key extends Item {
    constructor(id: string, module?: PZModule, props?: KeyProps) {
        super(id, module, props);
        this.type = props?.type || 'Key';
    }
}
