import { PZModule } from "../modules/PZModule";
import Item from "./Item";

export class Clothing extends Item {
    attachmentsProvided?: string;
    biteDefense?: string;
    bloodLocation?: string;
    bodyLocation?: string;
    bulletDefense?: string;
    canHaveHoles?: string;
    chanceToFall?: string;
    clothingExtraSubmenu?: string;
    clothingItem?: string;
    clothingItemExtra?: string;
    clothingItemExtraOption?: string;
    combatSpeedModifier?: string;
    conditionLowerChanceOneIn?: string;
    cosmetic?: string;
    fabricType?: string;
    iconsForTexture?: string;
    insulation?: string;
    neckProtectionModifier?: string;
    removeOnBroken?: string;
    scratchDefense?: string;
    stompPower?: string;
    waterResistance?: string;
    weightWet?: string;
    windResistance?: string;
    worldRender?: string;

    constructor(module: PZModule, id: string) {
        super(module, id);
        this.type = 'Clothing';
    }
}