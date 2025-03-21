import { PZModule } from '../modules/PZModule';
import { AlarmClock } from './AlarmClock';
import { Clothing } from './Clothing';
import { Item } from './Item';
import { AlarmClockClothingProps } from './itemProps/AlarmClockClothingProps';

export interface AlarmClockClothing extends AlarmClockClothingProps {}

export class AlarmClockClothing extends Item implements Clothing, AlarmClock {
    constructor(id: string, module?: PZModule, props?: AlarmClockClothingProps) {
        super(id, module, props);
        this.type = props?.type || 'AlarmClockClothing';
    }
}
