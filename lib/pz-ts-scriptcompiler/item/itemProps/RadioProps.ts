import { ItemProps } from './ItemProps';

export interface RadioProps extends ItemProps {
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
}
