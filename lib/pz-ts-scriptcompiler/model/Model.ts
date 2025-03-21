import { IAttachment } from './Attachment';

export interface Model {
    mesh: string;
    scale?: number;
    static?: boolean;
    texture?: string;
    invertX?: boolean;
    animationsMesh?: string;
    attachment?: IAttachment;
}
