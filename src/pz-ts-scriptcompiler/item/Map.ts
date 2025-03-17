import { PZModule } from "../modules/PZModule";
import Item from "./Item";

export class Map extends Item {
    map?: string;
    staticModel?: string;

    constructor(module: PZModule, id: string) {
        super(module, id);
        this.type = 'Map';
    }
}