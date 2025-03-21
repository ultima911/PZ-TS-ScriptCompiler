import { AlarmClock } from './AlarmClock';
import { Clothing } from './Clothing';
import { Item } from './Item';

export interface AlarmClockClothingProps extends Item, AlarmClock, Clothing {}
