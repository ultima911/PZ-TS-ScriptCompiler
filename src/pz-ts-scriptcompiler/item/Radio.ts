import { PZModule } from "../modules/PZModule";
import Item from "./Item";

export class Radio extends Item {
    acceptMediaType?: string;
    attachmentType?: string;
    baseVolumeRange?: string;
    disappearOnUse?: string;
    isHighTier?: string;
    isPortable?: string;
    isTelevision?: string;
    maxChannel?: string;
    micRange?: string;
    minChannel?: string;
    noTransmit?: string;
    staticModel?: string;
    transmitRange?: string;
    twoWay?: string;
    useDelta?: string;
    useWhileEquipped?: string;
    usesBattery?: string;
    worldObjectSprite?: string;
    
    constructor(module: PZModule, id: string) {
        super(module, id);
        this.type = 'Radio';
    }
}