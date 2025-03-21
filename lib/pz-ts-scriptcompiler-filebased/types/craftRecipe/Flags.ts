export type Flag = Flags | string;

export enum Flags {
    /* ---Equipping Items--- */
    /** The item will be equipped in the right hand. */
    Prop1 = 'Prop1',
    /** The item will be equipped in the left hand. */
    Prop2 = 'Prop2',

    /* ---Special Conditions--- */
    AllowFavorite = 'AllowFavorite',
    /** The item can only be crafted by hand. */
    HandcraftOnly = 'HandcraftOnly',
    /** Item won't be put back in the container it was taken from (usually bottles that need to be opened). */
    DontPutBack = 'DontPutBack',

    /* ---Food Conditions--- */
    AllowFrozenItem = 'AllowFrozenItem',
    AllowRottenItem = 'AllowRottenItem',
    /** The item is cooked. */
    IsCookedFoodItem = 'IsCookedFoodItem',
    /** The item is uncooked. */
    IsUncookedFoodItem = 'IsUncookedFoodItem',

    /* ---Fluids--- */
    /** The item is a fluid, unclear. */
    ItemIsFluid = 'ItemIsFluid',
    FullOfWater = 'FullOfWater',
    IsEmpty = 'IsEmpty',
    NotEmpty = 'NotEmpty',
    IsFull = 'IsFull',
    NotFull = 'NotFull',

    /* ---Item Condition--- */
    IsDamaged = 'IsDamaged',
    /** The item is not damaged. */
    IsUndamaged = 'IsUndamaged',
    /** The item is worn out. */
    IsWorn = 'IsWorn',
    IsNotWorn = 'IsNotWorn',
    AllowDestroyedItem = 'AllowDestroyedItem',
    /** The item is not broken. */
    NoBrokenItems = 'NoBrokenItems',
    /** The item is a head part. */
    IsHeadPart = 'IsHeadPart',
    /** Will degrade the item used. */
    MayDegrade = 'MayDegrade',
    /** Will degrade heavily the item used. */
    MayDegradeHeavy = 'MayDegradeHeavy',
    /** Will degrade lightly the item used. */
    MayDegradeLight = 'MayDegradeLight',
    /** The item can be sharpened. */
    IsSharpenable = 'IsSharpenable',
    /** The item is sharp. */
    IsNotDull = 'IsNotDull',
    /** The item's sharpness will be reduced. */
    SharpnessCheck = 'SharpnessCheck',

    /* ---Inheriting Items--- */
    /** The output clothing item will copy the input clothing item stats. */
    CopyClothing = 'CopyClothing',
    /** Crafted item will receive the ammunition of the input item. */
    InheritAmmunition = 'InheritAmmunition',
    /** Crafted item will receive the color of the input item. */
    InheritColor = 'InheritColor',
    /** Crafted item will receive the condition of the input item. */
    InheritCondition = 'InheritCondition',
    /** Crafted item will receive the cooked status of the input item. */
    InheritCooked = 'InheritCooked',
    /** Crafted item will receive the favorite status of the input item. */
    InheritFavorite = 'InheritFavorite',
    /** Crafted item will receive the food age of the input item. */
    InheritFoodAge = 'InheritFoodAge',
    /** Crafted item will receive the head condition of the input item. */
    InheritHeadCondition = 'InheritHeadCondition',
    /** Crafted item will receive the sharpness amount of the input item. */
    InheritSharpness = 'InheritSharpness',
    /** Crafted item will receive the uses amount of the input item. */
    InheritUses = 'InheritUses',

    /* ---Unknown--- */
    IsExclusive = 'IsExclusive',
    ItemCount = 'ItemCount',
    DontReplace = 'DontReplace',
}
