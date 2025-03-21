import { ItemProps } from './ItemProps';

export interface WeaponPartProps extends ItemProps {
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
