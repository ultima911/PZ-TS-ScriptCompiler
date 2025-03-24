import { IntRange } from '../../../util/types/IntRange';
import { AlarmClock } from '../AlarmClock';
import { AlarmClockClothing } from '../AlarmClockClothing';
import { Clothing } from '../Clothing';
import { Container } from '../Container';
import { Drainable } from '../Drainable';
import { Food } from '../Food';
import { Key } from '../Key';
import { Literature } from '../Literature';
import { Map } from '../Map';
import { Moveable } from '../Moveable';
import { Radio } from '../Radio';
import { Weapon } from '../Weapon';
import { WeaponPart } from '../WeaponPart';
import { ItemType } from './ItemType';
import { Tag } from './Tags';
import { VehicleType } from './VehicleType';

/**
 * Type that enforces the item reference structure of ModuleId.ItemId
 */
export type ModuleItemReference = `${string}.${string}`;

/**
 * Type that allows access to an Item either via simple string or an existing object.
 */
export type ItemOrReference = Item | ModuleItemReference;

/**
 * Any category of item. See their respective types for more information.
 */
export type AnyItem =
    | Item
    | AlarmClock
    | AlarmClockClothing
    | Clothing
    | Container
    | Drainable
    | Food
    | Key
    | Literature
    | Map
    | Moveable
    | Radio
    | Weapon
    | WeaponPart;

/** @see https://pzwiki.net/wiki/Item_(scripts) */
export class Item {
    alcoholic?: boolean;
    bandagePower?: number;
    brakeForce?: number;
    canBandage?: boolean;
    canStoreWater?: boolean;
    chanceToSpawnDamaged?: number;
    colorBlue?: IntRange<0, 256>;
    colorGreen?: IntRange<0, 256>;
    colorRed?: IntRange<0, 256>;
    conditionAffectsCapacity?: boolean;
    conditionLowerOffroad?: number;
    conditionLowerStandard?: number;
    conditionMax?: number;
    count?: number;
    displayCategory?: string;
    displayName?: string;
    engineLoudness?: number;
    equippedNoSprint?: boolean;
    fishingLure?: boolean;
    gunType?: Item;
    icon?: string;
    itemWhenDry?: Item;
    maxAmmo?: number;
    maxCapacity?: number;
    mechanicsItem?: boolean;
    mediaCategory?: string;
    medical?: string;
    metalValue?: number;
    onCreate?: string;
    placeMultipleSound?: string;
    placeOneSound?: string;
    primaryAnimMask?: string;
    protectFromRainWhenEquipped?: string;
    rainFactor?: number;
    remoteController?: boolean;
    replaceOnUse?: Item;
    replaceOnUseOn?: { source: ItemOrReference; result: ItemOrReference };
    replaceTypes?: { source: ItemOrReference; result: ItemOrReference }[];
    requiresEquippedBothHands?: boolean;
    secondaryAnimMask?: string;
    survivalGear?: boolean;
    suspensionCompression?: number;
    suspensionDamping?: number;
    tags?: Tag[];
    tooltip?: string;
    type?: ItemType;
    vehicleType?: VehicleType;
    nutrition?: string;
    weight?: number;
    wetCooldown?: number;
    wheelFriction?: number;
    worldStaticModel?: string; // TODO: Make worldStaticModel a referenceable type/obj
}
