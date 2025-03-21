import { Compiler } from '../lib/pz-ts-scriptcompiler/compiler/Compiler';
import { Item } from '../lib/pz-ts-scriptcompiler/item/Item';
import { ReplaceOnUseOn } from '../lib/pz-ts-scriptcompiler/item/types/ReplaceOnUseOn';
import { ReplaceTypes } from '../lib/pz-ts-scriptcompiler/item/types/ReplaceTypes';
import { Tags } from '../lib/pz-ts-scriptcompiler/item/Tags';
import { Tag } from '../lib/pz-ts-scriptcompiler/item/types/Tag';
import { VehicleType } from '../lib/pz-ts-scriptcompiler/item/VehicleType';
import { PZModule } from '../lib/pz-ts-scriptcompiler/modules/PZModule';

const testModule = new PZModule('TestModule');

const itm = new Item(testModule, 'MockItem2', {
    alcoholic: true,
    bandagePower: 1,
    brakeForce: 1,
    canBandage: true,
    canStoreWater: true,
    chanceToSpawnDamaged: 1,
    colorBlue: 0,
    colorGreen: 255,
    colorRed: 255,
    conditionAffectsCapacity: true,
    conditionLowerOffroad: 1,
    conditionLowerStandard: 1,
    conditionMax: 1,
    count: 1,
    displayCategory: 'stringValue!',
    displayName: 'stringValue!',
    engineLoudness: 1,
    equippedNoSprint: true,
    fishingLure: true,
    gunType: new Item(new PZModule('Base'), 'GunType'),
    icon: 'stringValue!',
    maxAmmo: 1,
    maxCapacity: 1,
    mechanicsItem: true,
    mediaCategory: 'stringValue!',
    medical: 'stringValue!',
    metalValue: 1,
    onCreate: 'stringValue!',
    placeMultipleSound: 'stringValue!',
    placeOneSound: 'stringValue!',
    primaryAnimMask: 'stringValue!',
    protectFromRainWhenEquipped: 'stringValue!',
    rainFactor: 1,
    remoteController: true,
    replaceOnUseOn: new ReplaceOnUseOn(new Item(testModule, 'SourceItem1'), new Item(testModule, 'ResultItem1')),
    replaceTypes: new ReplaceTypes(
        new ReplaceOnUseOn(new Item(testModule, 'SourceItem2'), new Item(testModule, 'ResultItem2')),
        new ReplaceOnUseOn(new Item(testModule, 'SourceItem3'), new Item(testModule, 'ResultItem3')),
    ),
    requiresEquippedBothHands: true,
    secondaryAnimMask: 'stringValue!',
    survivalGear: true,
    suspensionCompression: 1,
    suspensionDamping: 1,
    tags: new Tags(Tag['2SapphireJewellery'], Tag.AlreadyCooked),
    tooltip: 'stringValue!',
    type: 'Container',
    vehicleType: VehicleType.Standard,
    nutrition: 'stringValue!',
    wetCooldown: 1,
    wheelFriction: 1,
    worldStaticModel: 'stringValue!',
});

testModule.addItems(itm);

console.log(Compiler.compile(testModule));
