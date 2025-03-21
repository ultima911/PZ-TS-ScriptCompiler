import { ItemProps } from './ItemProps';

export interface ClothingProps extends ItemProps {
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
}
