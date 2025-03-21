import { PZModule } from '../modules/PZModule';
import { Item } from './Item';
import { AlarmClockProps } from './itemProps/AlarmClockProps';

export interface AlarmClock extends AlarmClockProps {}

export class AlarmClock extends Item {
    constructor(id: string, module?: PZModule, props?: AlarmClockProps) {
        super(id, module, props);
        this.type = props?.type || 'AlarmClock';
    }
}
