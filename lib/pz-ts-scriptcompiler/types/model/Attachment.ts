import { AttachmentPoint } from './AttachmentPoints';
import { Bone } from './Bones';
import { Vector } from './Vector';

export interface Attachment {
    attachmentPoint?: AttachmentPoint;
    bone?: Bone;
    offset?: Vector;
    rotate?: Vector;
    scale?: number;
}
