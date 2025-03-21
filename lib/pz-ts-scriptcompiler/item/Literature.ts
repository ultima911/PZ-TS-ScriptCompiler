import { PZModule } from '../modules/PZModule';
import { Item } from './Item';
import { LiteratureProps } from './itemProps/LiteratureProps';

export interface Literature extends LiteratureProps {}

export class Literature extends Item {
    constructor(id: string, module?: PZModule, props?: LiteratureProps) {
        super(id, module, props);
        this.type = props?.type || 'Literature';
    }
}
