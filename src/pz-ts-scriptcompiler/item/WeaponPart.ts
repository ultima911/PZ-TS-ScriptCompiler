import { PZModule } from "../modules/PZModule";
import Item from "./Item";

export class WeaponPart extends Item {
    aimingTimeModifier?: string;
    hitChanceModifier?: string;
    maxRangeModifier?: string;
    minRangeModifier?: string;
    mountOn?: string;
    partType?: string;
    recoilDelayModifier?: string;
    reloadTimeModifier?: string;
    weightModifier?: string;
    
    constructor(module: PZModule, id: string) {
        super(module, id);
        this.type = 'WeaponPart';
    }
}