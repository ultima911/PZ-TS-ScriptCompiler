import { Weapon } from '../../../../../../lib/pz-ts-scriptcompiler/item/Weapon';
import { exampleModModule } from '../../../../exampleModModule';

// We can define items in their own individual files like such, or multiple in one file like in the 2handed example.
export const exampleBat = new Weapon('ExampleBat', {
    module: exampleModModule, // We can attach items to our module here, or in the module file itself.
    displayName: 'Example Bat',
    weaponSprite: 'Example_Bat',
    worldStaticModel: '',
});
