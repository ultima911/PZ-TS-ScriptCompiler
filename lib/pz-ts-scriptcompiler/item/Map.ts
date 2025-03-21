import { PZModule } from '../modules/PZModule';
import { Item } from './Item';
import { MapProps } from './itemProps/MapProps';

export interface Map extends MapProps {}

export class Map extends Item {
    constructor(id: string, module?: PZModule, props?: MapProps) {
        super(id, module, props);
        this.type = props?.type || 'Map';
    }
}
