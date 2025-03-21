import { PZModule } from '../modules/PZModule';
import { Item } from './Item';
import { MoveableProps } from './itemProps/MoveableProps';

export interface Moveable extends MoveableProps {}

export class Moveable extends Item {
    constructor(id: string, module?: PZModule, props?: MoveableProps) {
        super(id, module, props);
        this.type = props?.type || 'Moveable';
    }
}
