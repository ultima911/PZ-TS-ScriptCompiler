import { Item } from '../item/Item';

export interface WeaponPart extends Item {
    aimingTimeModifier?: string;
    hitChanceModifier?: string;
    maxRangeModifier?: string;
    minRangeModifier?: string;
    mountOn?: string;
    partType?: string;
    recoilDelayModifier?: string;
    reloadTimeModifier?: string;
    weightModifier?: string;
}
