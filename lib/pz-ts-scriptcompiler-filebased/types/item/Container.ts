import { Item } from './Item';

export interface Container extends Item {
    acceptItemFunction?: string;
    attachmentReplacement?: string;
    canBeEquipped?: string;
    canHaveHoles?: string;
    capacity?: string;
    closeSound?: string;
    clothingItem?: string;
    onlyAcceptCategory?: string;
    openSound?: string;
    putInSound?: string;
    replaceInPrimaryHand?: string;
    replaceInSecondHand?: string;
    runSpeedModifier?: string;
    soundParameter?: string;
    staticModel?: string;
    weightReduction?: string;
}
