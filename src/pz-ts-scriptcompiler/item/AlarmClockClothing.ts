import { PZModule } from "../modules/PZModule";
import { AlarmClock } from "./AlarmClock";
import { Clothing } from "./Clothing";
import Item from "./Item";

export class AlarmClockClothing extends Item implements Clothing, AlarmClock {
        constructor(module: PZModule, id: string) {
            super(module, id);
            this.type = 'AlarmClockClothing';
        }
}