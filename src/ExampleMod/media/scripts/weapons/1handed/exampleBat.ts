import { ScriptFile } from '../../../../../../lib/pz-ts-scriptcompiler/ScriptFile';
import { AttachmentType } from '../../../../../../lib/pz-ts-scriptcompiler/types/items/AttachmentTypes';

new ScriptFile({
    moduleId: 'ScrapSmith',
    imports: 'Base',
    items: {
        ArmingSword: {
            displayName: 'Arming Sword',
            weaponSprite: 'ScrapSmith_ArmingSword',
            icon: 'ScrapSmith_ArmingSword',
            type: 'Weapon',
            attachmentType: 'ScrapSmith_Blade' as AttachmentType,
            categories: 'LongBlade',
            displayCategory: 'WeaponCrafted',
            twoHandWeapon: false,
            requiresEquippedBothHands: false,
            equippedNoSprint: false,
            tags: ['CutPlant', 'HasMetal'],
            enduranceMod: 0.85,
            weight: 2.2,
            cantAttackWithLowestEndurance: false,
            metalValue: 50,
            conditionLowerChanceOneIn: 30,
            conditionMax: 15,
            hitAngleMod: -30,
            baseSpeed: 1.05,
            minAngle: 0.7,
            minRange: 0.61,
            maxRange: 1.45,
            minDamage: 2.0,
            maxDamage: 3.5,
            doorDamage: 10,
            treeDamage: 5,
            critDmgMultiplier: 2,
            criticalChance: 20,
            damageCategory: 'Slash',
            damageMakeHole: true,
            maxHitCount: 2,
            pushBackMod: 0.3,
            knockBackOnNoDeath: false,
            splatBloodOnNoDeath: true,
            splatNumber: 1,
            breakSound: 'KatanaBreak',
            hitSound: 'KatanaHit',
            hitFloorSound: 'KatanaHit',
            doorHitSound: 'KatanaHit',
            dropSound: 'KatanaDrop',
            swingSound: 'KatanaSwing',
            swingAnim: 'Bat',
            runAnim: 'Run_Weapon2',
            idleAnim: 'Idle_Weapon2',
        },
    },
});

// We can define items in their own individual files like such, or multiple in one file like in the 2handed example.
// export const exampleBat = new Weapon('ExampleBat', {
//     module: exampleModModule, // We can attach items to our module here, or in the module file itself.
//     displayName: 'Example Bat',
//     weaponSprite: 'Example_Bat',
//     worldStaticModel: '',
// });
