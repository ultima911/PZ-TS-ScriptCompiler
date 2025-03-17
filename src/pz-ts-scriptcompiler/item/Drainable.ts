import { PZModule } from "../modules/PZModule";
import Item from "./Item";

export class Drainable extends Item {
    activatedItem?: string;
    alcoholPower?: string;
    cantBeConsolided?: string;
    consolidateOption?: string;
    fillFromDispenserSound?: string;
    fillFromTapSound?: string;
    hairDye?: string;
    isWaterSource?: string;
    keepOnDeplete?: string;
    lightDistance?: string;
    lightStrength?: string;
    makeUpType?: string;
    replaceOnDeplete?: string;
    staticModel?: string;
    ticksPerEquipUse?: string;
    torchCone?: string;
    torchDot?: string;
    useDelta?: string;
    useWhileEquipped?: string;
    weightEmpty?: string;

    constructor(module: PZModule, id: string) {
        super(module, id);
        this.type = 'Drainable';
    }
}