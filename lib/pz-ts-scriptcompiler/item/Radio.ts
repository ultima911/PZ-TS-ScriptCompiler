import { PZModule } from '../modules/PZModule';
import { Item } from './Item';
import { RadioProps } from './itemProps/RadioProps';

export interface Radio extends RadioProps {}

export class Radio extends Item {
    constructor(id: string, module?: PZModule, props?: RadioProps) {
        super(id, module, props);
        this.type = props?.type || 'Radio';
    }
}
