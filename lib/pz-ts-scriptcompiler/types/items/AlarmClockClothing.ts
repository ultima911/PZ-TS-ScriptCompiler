import { AlarmClock } from './AlarmClock';
import { Clothing } from './Clothing';
import { Item } from './item/Item';

export interface AlarmClockClothing extends Item, AlarmClock, Clothing {}
