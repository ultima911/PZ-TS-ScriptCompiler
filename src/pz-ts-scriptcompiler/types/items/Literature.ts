import { Item } from '../item/Item';

export interface Literature extends Item {
    boredomChange?: string;
    canBeWrite?: string;
    lvlSkillTrained?: string;
    numLevelsTrained?: string;
    numberOfPages?: string;
    pageToWrite?: string;
    skillTrained?: string;
    staticModel?: string;
    stressChange?: string;
    teachedRecipes?: string;
    unhappyChange?: string;
}
