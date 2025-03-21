import { PZModule } from '../modules/PZModule';
import { Item } from './Item';
import { WeaponPartProps } from './itemProps/WeaponPartProps';

export interface WeaponPart extends WeaponPartProps {}

export class WeaponPart extends Item {
    constructor(id: string, module?: PZModule, props?: WeaponPartProps) {
        super(id, module, props);
        this.type = props?.type || 'WeaponPart';
    }
}
