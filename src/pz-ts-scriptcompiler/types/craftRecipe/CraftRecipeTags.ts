export type CraftRecipeTag = CraftRecipeTags | string;

export enum CraftRecipeTags {
    // Tags
    /** Doesn't need to respect specific conditions to be researched. */
    CanAlwaysBeResearched = 'CanAlwaysBeResearched',
    /** Can be crafted in the dark. */
    CanBeDoneInDark = 'CanBeDoneInDark',
    /** Can only be crafted by right-clicking. */
    RightClickOnly = 'RightClickOnly',

    // Activity tags
    /** Recipe is related to cooking. */
    Cooking = 'Cooking',
    /** Recipe is related to electricity. */
    Electrical = 'Electrical',
    /** Recipe is related to engineering. */
    Engineer = 'Engineer',
    /** Recipe is related to farming. */
    Farming = 'Farming',
    /** Recipe is related to fishing. */
    Fishing = 'Fishing',
    /** Recipe is related to glassmaking. */
    Glassmaking = 'Glassmaking',
    /** Recipe is related to health. */
    Health = 'Health',
    /** Recipe is related to packing. */
    Packing = 'Packing',
    /** Recipe is related to pottery. */
    Pottery = 'Pottery',
    /** Recipe is related to smithing. */
    Smithing = 'Smithing',
    /** Recipe is related to survival. */
    Survivalist = 'Survivalist',
    /** Recipe is related to trapping. */
    Trapper = 'Trapper',
    /** Recipe is related to welding. */
    Welding = 'Welding',

    // Crafting benches
    /** Can be crafted on any surface. */
    AnySurfaceCraft = 'AnySurfaceCraft',
    /** Can be crafted in hand. */
    InHandCraft = 'InHandCraft',
    /** Can be crafted from the floor. */
    CanBeDoneFromFloor = 'CanBeDoneFromFloor',
    /** Can be crafted in a coffee machine. */
    CoffeeMachine = 'CoffeeMachine',
    /** Can be crafted in a forge. */
    Forge = 'Forge',
    /** Can be crafted in a furnace. */
    Furnace = 'Furnace',
    /** Can be crafted on a grindstone. */
    Grindstone = 'Grindstone',
    /** Can be crafted on a hand press. */
    HandPress = 'HandPress',
    /** Can be crafted on a heckle. */
    Heckling = 'Heckling',
    /** Can be crafted in a key duplicator. */
    KeyDuplicator = 'KeyDuplicator',
    /** Can be crafted in a large kiln. */
    KilnLarge = 'KilnLarge',
    /** Can be crafted in a small kiln. */
    KilnSmall = 'KilnSmall',
    /** Can be crafted on a pottery bench. */
    PotteryBench = 'PotteryBench',
    /** Can be crafted on a pottery wheel. */
    PotteryWheel = 'PotteryWheel',
    /** Can be crafted in a ripple comb. */
    Rippling = 'Rippling',
    /** Can be crafted on a scutching board. */
    Scutching = 'Scutching',
    /** Can be crafted on a standing drill press. */
    StandingDrillPress = 'StandingDrillPress',
    /** Can be crafted in a toaster. */
    Toaster = 'Toaster',
}
