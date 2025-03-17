import { PZModule } from "../modules/PZModule";
import Item from "./Item";

export class Moveable extends Item {
    worldObjectSprite?: string;
    
    constructor(module: PZModule, id: string) {
        super(module, id);
        this.type = 'Moveable';
    }
}