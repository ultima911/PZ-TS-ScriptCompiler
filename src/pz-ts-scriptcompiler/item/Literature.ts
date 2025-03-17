import { PZModule } from "../modules/PZModule";
import Item from "./Item";

export class Literature extends Item {
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

    constructor(module: PZModule, id: string) {
        super(module, id);
        this.type = 'Literature';
    }
}