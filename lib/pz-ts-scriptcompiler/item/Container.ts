import { PZModule } from '../modules/PZModule';
import { Item } from './Item';
import { ContainerProps } from './itemProps/ContainerProps';

export interface Container extends ContainerProps {}

export class Container extends Item {
    constructor(id: string, module?: PZModule, props?: ContainerProps) {
        super(id, module, props);
        this.type = props?.type || 'Container';
    }
}
