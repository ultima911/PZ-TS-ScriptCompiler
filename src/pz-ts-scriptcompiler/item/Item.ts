import { IntRange } from "../../common/util/IntRange";
import { PZModule } from "../modules/PZModule";
import { ItemType } from "./ItemType";
import { ReplaceOnUseOn } from "./ReplaceOnUseOn";
import { ReplaceTypes } from "./ReplaceTypes";
import { Tags } from "./SemiColonSeparatedArray";
import { VehicleType } from "./VehicleType";

export default class Item {
  module: PZModule; // TODO: ADD MODULES AND ALL OF THEIR ITEMS AND ALLOW IT TO BE EXTENDED UPON
  id: string;
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
  replaceOnUseOn?: ReplaceOnUseOn;
  replaceTypes?: ReplaceTypes;
  requiresEquippedBothHands?: boolean;
  secondaryAnimMask?: string;
  survivalGear?: boolean;
  suspensionCompression?: number;
  suspensionDamping?: number;
  tags?: Tags;
  tooltip?: string;
  type?: ItemType;
  vehicleType?: VehicleType;
  nutrition?: string;
  wetCooldown?: number;
  wheelFriction?: number;
  // TODO: Make worldStaticModel a referenceable type/obj
  worldStaticModel?: string;

  constructor(module: PZModule, id: string, props?: Omit<Item, 'module' | 'id' >) {
    this.module = module;
    this.id = id;
    Object.assign(this, props)
  }

  public toString = (): string => {
    return this.id;
  }
}
