import { PZModule } from '../modules/PZModule';
import { ItemProps } from './itemProps/ItemProps';

export interface Item extends ItemProps {}

/** @see https://pzwiki.net/wiki/Item_(scripts) */
export class Item implements ItemProps {
    /**
     * The ItemID which will be used to declare the item in the script.
     * @example
     * item ExampleItem
     * {
     *  item properties...
     * }
     */
    id: string;

    /**
     * The module which this item is intended to be contained within.
     * @example
     * module ExampleModule
     * {
     *  item ExampleItem
     *  {
     *   item properties...
     *  }
     * }
     */
    module?: PZModule;

    constructor(id: string, module?: PZModule, props?: ItemProps) {
        this.id = id;
        this.module = module;
        if (this.module) this.module.addItem(this);
        Object.assign(this, props);
    }

    public toString = (): string => {
        return this.id;
    };
}
