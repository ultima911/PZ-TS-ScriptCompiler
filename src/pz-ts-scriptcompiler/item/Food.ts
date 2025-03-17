import { PZModule } from "../modules/PZModule";
import Item from "./Item";

export class Food extends Item {
    badCold?: string;
    badInMicrowave?: string;
    boredomChange?: string;
    calories?: string;
    cannedFood?: string;
    cantBeFrozen?: string;
    cantEat?: string;
    cookingSound?: string;
    customContextMenu?: string;
    customEatSound?: string;
    dangerousUncooked?: string;
    daysFresh?: string;
    daysTotallyRotten?: string;
    eatType?: string;
    enduranceChange?: string;
    evolvedRecipe?: string;
    evolvedRecipeName?: string;
    fatigueChange?: string;
    fluReduction?: string;
    foodType?: string;
    goodHot?: string;
    herbalistType?: string;
    hungerChange?: string;
    isCookable?: string;
    minutesToBurn?: string;
    minutesToCook?: string;
    onCooked?: string;
    onEat?: string;
    packaged?: string;
    painReduction?: string;
    poison?: string;
    poisonDetectionLevel?: string;
    poisonPower?: string;
    proteins?: string;
    reduceFoodSickness?: string;
    reduceInfectionPower?: string;
    removeNegativeEffectOnCooked?: string;
    removeUnhappinessWhenCooked?: string;
    replaceOnCooked?: string;
    replaceOnRotten?: string;
    requireInHandOrInventory?: string;
    spice?: string;
    staticModel?: string;
    stressChange?: string;
    thirstChange?: string;
    unhappyChange?: string;
    useForPoison?: string;

    constructor(module: PZModule, id: string) {
        super(module, id);
        this.type = 'Food';
    }
}