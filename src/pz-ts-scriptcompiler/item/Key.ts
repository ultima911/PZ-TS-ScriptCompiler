import { PZModule } from "../modules/PZModule";
import Item from "./Item";

export class Key extends Item {
    digitalPadlock?: string;
    padlock?: string;

    constructor(module: PZModule, id: string) {
        super(module, id);
        this.type = 'Key';
    }
}