import { PZModule } from '../modules/PZModule';
import { Item } from './Item';
import { WeaponProps } from './itemProps/WeaponProps';

export interface Weapon extends WeaponProps {}

/**
 * @see https://pzwiki.net/wiki/Item_(scripts)#Weapon
 */
export class Weapon extends Item {
    constructor(id: string, module?: PZModule, props?: WeaponProps) {
        super(id, module, props);
        this.type = props?.type || 'Weapon';
    }
}
