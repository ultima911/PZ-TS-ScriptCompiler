export interface IAttachment {
    attachmentPoint?: AttachmentPoint;
    bone?: Bone;
    offset?: Vector;
    rotate?: Vector;
    scale?: number;
}

/**
 * Add new custom attachment points here.
 */
export type AttachmentPoint =
    | 'world'
    | '1schoolbaglefthand'
    | '1schoolbagrighthand'
    | 'AnkleHolster'
    | 'Bip01_Prop1'
    | 'Bip01_Prop2'
    | 'ShoulderHolster'
    | 'axe_back'
    | 'back'
    | 'back_guitar'
    | 'back_guitar_acoustic'
    | 'backpack_left'
    | 'bedroll_bottom'
    | 'bedroll_bottom_alice'
    | 'bedroll_bottom_big'
    | 'belt_left'
    | 'belt_left_screwdriver'
    | 'belt_left_upside'
    | 'belt_right'
    | 'belt_right_screwdriver'
    | 'belt_right_upside'
    | 'belt_rotated_left'
    | 'belt_rotated_right'
    | 'big_blade_back_bag'
    | 'big_w_back'
    | 'big_w_back_bag'
    | 'bighikingbaglefthand'
    | 'bighikingbagrighthand'
    | 'blade_back'
    | 'crowbar_back'
    | 'duffelbaglefthand'
    | 'duffelbagrighthand'
    | 'fryingpan_back'
    | 'fryingpan_back_bag'
    | 'hikingbaglefthand'
    | 'hikingbagrighthand'
    | 'holster_left'
    | 'holster_right'
    | 'knife_belt_back'
    | 'knife_belt_front'
    | 'knife_head'
    | 'knife_in_back'
    | 'knife_left_leg'
    | 'knife_right_leg'
    | 'knife_shoulder'
    | 'knife_stomach'
    | 'meatcleaver_in_back'
    | 'meatcleaver_left'
    | 'meatcleaver_right'
    | 'nightstick_left'
    | 'nightstick_right'
    | 'racket_back'
    | 'racket_back_bag'
    | 'rifle_back'
    | 'rifle_back_bag'
    | 'saucepan_back'
    | 'saucepan_back_bag'
    | 'shovel_back'
    | 'shovel_back_bag'
    | 'stomach'
    | 'walkie_belt_left'
    | 'walkie_belt_right'
    | 'webbing_left_knife'
    | 'webbing_left_walkie'
    | 'webbing_left_knife'
    | 'webbing_left_walkie'
    | 'wrench_left'
    | 'wrench_right';

/**
 * Add new custom bones here.
 */
export type Bone =
    // | 'Dummy01'
    // | 'Translation_Data'
    | 'Bip01'
    | 'Bip01_Pelvis'
    | 'Bip01_Spine'
    | 'Bip01_Spine1'
    | 'Bip01_Neck'
    | 'Bip01_Head'
    | 'Bip01_L_Clavicle'
    | 'Bip01_L_UpperArm'
    | 'Bip01_L_Forearm'
    | 'Bip01_L_Hand'
    | 'Bip01_L_Finger0'
    | 'Bip01_L_Finger1'
    | 'Bip01_R_Clavicle'
    | 'Bip01_R_UpperArm'
    | 'Bip01_R_Forearm'
    | 'Bip01_R_Hand'
    | 'Bip01_R_Finger0'
    | 'Bip01_R_Finger1'
    | 'Bip01_BackPack'
    | 'Bip01_L_Thigh'
    | 'Bip01_L_Calf'
    | 'Bip01_L_Foot'
    | 'Bip01_L_Toe0'
    | 'Bip01_R_Thigh'
    | 'Bip01_R_Calf'
    | 'Bip01_R_Foot'
    | 'Bip01_R_Toe0'
    | 'Bip01_DressFront'
    | 'Bip01_DressBack'
    | 'Bip01_Prop1'
    | 'Bip01_Prop2';

export interface Vector {
    x: number;
    y: number;
    z: number;
}
