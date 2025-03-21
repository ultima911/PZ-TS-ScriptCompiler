import { IntRange } from '../../../common/types/IntRange';
import { ItemType } from '../../../pz-ts-scriptcompiler/item/types/ItemType';
import { ReplaceOnUseOn } from '../../../pz-ts-scriptcompiler/item/types/ReplaceOnUseOn';
import { ReplaceTypes } from '../../../pz-ts-scriptcompiler/item/types/ReplaceTypes';
import { Tags } from '../../../pz-ts-scriptcompiler/item/types/Tags';
import { VehicleType } from '../../../pz-ts-scriptcompiler/item/types/VehicleType';

/**
 * Type that enforces the item reference structure of ModuleId.ItemId
 */
export type ModuleItemReference = `${string}.${string}`;

/**
 * Type that allows access to an Item either via simple string or an existing object.
 */
export type ItemOrReference = Item | ModuleItemReference;

/** @see https://pzwiki.net/wiki/Item_(scripts) */
export interface Item {
    /**
     * The ItemID which will be used to declare the item in the script.
     * @example
     * item ExampleItem
     * {
     *  item properties...
     * }
     */
    id: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts) */
    alcoholic?: boolean;

    /** @see https://pzwiki.net/wiki/Item_(scripts) */
    bandagePower?: number;

    /** @see https://pzwiki.net/wiki/Item_(scripts) */
    brakeForce?: number;

    /** @see https://pzwiki.net/wiki/Item_(scripts) */
    canBandage?: boolean;

    /** @see https://pzwiki.net/wiki/Item_(scripts) */
    canStoreWater?: boolean;

    /** @see https://pzwiki.net/wiki/Item_(scripts) */
    chanceToSpawnDamaged?: number;

    /** @see https://pzwiki.net/wiki/Item_(scripts) */
    colorBlue?: IntRange<0, 256>;

    /** @see https://pzwiki.net/wiki/Item_(scripts) */
    colorGreen?: IntRange<0, 256>;

    /** @see https://pzwiki.net/wiki/Item_(scripts) */
    colorRed?: IntRange<0, 256>;

    /** @see https://pzwiki.net/wiki/Item_(scripts) */
    conditionAffectsCapacity?: boolean;

    /** @see https://pzwiki.net/wiki/Item_(scripts) */
    conditionLowerOffroad?: number;

    /** @see https://pzwiki.net/wiki/Item_(scripts) */
    conditionLowerStandard?: number;

    /** @see https://pzwiki.net/wiki/Item_(scripts) */
    conditionMax?: number;

    /** @see https://pzwiki.net/wiki/Item_(scripts) */
    count?: number;

    /** @see https://pzwiki.net/wiki/Item_(scripts) */
    displayCategory?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts) */
    displayName?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts) */
    engineLoudness?: number;

    /** @see https://pzwiki.net/wiki/Item_(scripts) */
    equippedNoSprint?: boolean;

    /** @see https://pzwiki.net/wiki/Item_(scripts) */
    fishingLure?: boolean;

    /** @see https://pzwiki.net/wiki/Item_(scripts) */
    gunType?: Item;

    /** @see https://pzwiki.net/wiki/Item_(scripts) */
    icon?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts) */
    itemWhenDry?: Item;

    /** @see https://pzwiki.net/wiki/Item_(scripts) */
    maxAmmo?: number;

    /** @see https://pzwiki.net/wiki/Item_(scripts) */
    maxCapacity?: number;

    /** @see https://pzwiki.net/wiki/Item_(scripts) */
    mechanicsItem?: boolean;

    /** @see https://pzwiki.net/wiki/Item_(scripts) */
    mediaCategory?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts) */
    medical?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts) */
    metalValue?: number;

    /** @see https://pzwiki.net/wiki/Item_(scripts) */
    onCreate?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts) */
    placeMultipleSound?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts) */
    placeOneSound?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts) */
    primaryAnimMask?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts) */
    protectFromRainWhenEquipped?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts) */
    rainFactor?: number;

    /** @see https://pzwiki.net/wiki/Item_(scripts) */
    remoteController?: boolean;

    /** @see https://pzwiki.net/wiki/Item_(scripts) */
    replaceOnUse?: Item;

    /** @see https://pzwiki.net/wiki/Item_(scripts) */
    replaceOnUseOn?: ReplaceOnUseOn;

    /** @see https://pzwiki.net/wiki/Item_(scripts) */
    replaceTypes?: ReplaceTypes;

    /** @see https://pzwiki.net/wiki/Item_(scripts) */
    requiresEquippedBothHands?: boolean;

    /** @see https://pzwiki.net/wiki/Item_(scripts) */
    secondaryAnimMask?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts) */
    survivalGear?: boolean;

    /** @see https://pzwiki.net/wiki/Item_(scripts) */
    suspensionCompression?: number;

    /** @see https://pzwiki.net/wiki/Item_(scripts) */
    suspensionDamping?: number;

    /** @see https://pzwiki.net/wiki/Item_(scripts) */
    tags?: Tags;

    /** @see https://pzwiki.net/wiki/Item_(scripts) */
    tooltip?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts) */
    type?: ItemType;

    /** @see https://pzwiki.net/wiki/Item_(scripts) */
    vehicleType?: VehicleType;

    /** @see https://pzwiki.net/wiki/Item_(scripts) */
    nutrition?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts) */
    wetCooldown?: number;

    /** @see https://pzwiki.net/wiki/Item_(scripts) */
    wheelFriction?: number;

    /** @see https://pzwiki.net/wiki/Item_(scripts) */
    worldStaticModel?: string; // TODO: Make worldStaticModel a referenceable type/obj
}
