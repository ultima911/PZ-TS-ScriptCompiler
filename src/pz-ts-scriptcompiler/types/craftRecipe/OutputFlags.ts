/**
 * **From the wiki:**
 * Flags for outputs currently do not have a single example in the vanilla recipes.
 * The flags are listed because present in the game code but there currently is no confirmation of them working.
 */
export type OutputFlag = OutputFlags | string;

/**
 * **From the wiki:**
 * Flags for outputs currently do not have a single example in the vanilla recipes.
 * The flags are listed because present in the game code but there currently is no confirmation of them working.
 */
export enum OutputFlags {
    /* ---Special Conditions--- */
    /** The output item can only be crafted when you didn't use automation. */
    HandcraftOnly = 'HandcraftOnly',
    /** The output item can only be crafted when you used automation. (existed but not implemented yet) */
    AutomationOnly = 'AutomationOnly',

    /* ---Special Conditions--- */
    /** The fluidContainer is empty. */
    IsEmpty = 'IsEmpty',
    /** Fluid already contained will be emptied. */
    ForceEmpty = 'ForceEmpty',
    /** The fluidContainer will try to fill up if the available capacity exceeds the create fluid amount. */
    AlwaysFill = 'AlwaysFill',
    /** The fluidContainer must have enough free capacity. */
    RespectCapacity = 'RespectCapacity',
}
