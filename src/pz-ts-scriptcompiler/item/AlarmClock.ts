import { PZModule } from "../modules/PZModule";
import Item from "./Item";

export class AlarmClock extends Item {
    alarmSound?: string;

    constructor(module: PZModule, id: string) {
        super(module, id);
        this.type = 'AlarmClock';
    }
}