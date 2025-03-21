import { Item } from './Item';

/** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
export interface Weapons extends Item {
    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    aimingPerkCritModifier?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    aimingPerkHitChanceModifier?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    aimingPerkMinAngleModifier?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    aimingPerkRangeModifier?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    aimingTime?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    alwaysKnockdown?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    ammoBox?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    ammoType?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    attachmentType?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    baseSpeed?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    breakSound?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    bringToBearSound?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    canBePlaced?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    canBeRemote?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    canBeReused?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    cantAttackWithLowestEndurance?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    categories?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    clickSound?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    clipSize?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    closeKillMove?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    conditionLowerChanceOneIn?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    countDownSound?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    critDmgMultiplier?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    criticalChance?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    damageCategory?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    damageMakeHole?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    doorDamage?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    doorHitSound?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    ejectAmmoSound?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    ejectAmmoStartSound?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    ejectAmmoStopSound?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    enduranceMod?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    equipSound?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    explosionPower?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    explosionRange?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    explosionSound?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    explosionTimer?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    extraDamage?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    fireMode?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    fireModePossibilities?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    firePower?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    fireRange?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    haveChamber?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    hitAngleMod?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    hitChance?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    hitFloorSound?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    hitSound?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    idleAnim?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    insertAllBulletsReload?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    insertAmmoSound?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    insertAmmoStartSound?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    insertAmmoStopSound?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    isAimedFirearm?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    jamGunChance?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    knockBackOnNoDeath?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    knockdownMod?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    magazineType?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    manuallyRemoveSpentRounds?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    maxDamage?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    maxHitCount?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    maxRange?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    minAngle?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    minDamage?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    minRange?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    minimumSwingTime?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    modelWeaponPart?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    multipleHitConditionAffected?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    noiseDuration?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    noiseRange?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    otherHandRequire?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    otherHandUse?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    physicsObject?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    piercingBullets?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    placedSprite?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    pushBackMod?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    rackAfterShoot?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    rackSound?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    ranged?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    recoilDelay?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    reloadTime?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    remoteRange?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    runAnim?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    sensorRange?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    shellFallSound?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    smokeRange?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    soundMap?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    soundRadius?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    soundVolume?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    splatBloodOnNoDeath?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    splatNumber?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    splatSize?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    stopPower?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    subCategory?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    swingAmountBeforeImpact?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    swingAnim?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    swingSound?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    swingTime?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    treeDamage?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    triggerExplosionTimer?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    twoHandWeapon?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    unequipSound?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    useEndurance?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    useSelf?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    weaponLength?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    weaponReloadType?: string;

    /** @see https://pzwiki.net/wiki/Item_(scripts)#Weapon */
    weaponSprite?: string;
}
