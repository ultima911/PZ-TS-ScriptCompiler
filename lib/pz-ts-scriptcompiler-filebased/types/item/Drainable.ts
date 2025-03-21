import { Item } from './Item';

export interface Drainable extends Item {
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
}
