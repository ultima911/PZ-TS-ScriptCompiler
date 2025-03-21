import { AttachmentPoint } from './AttachmentPoint';
import { Bone } from './Bone';
import { Vector } from './Vector';

export interface Attachment {
    attachmentPoint?: AttachmentPoint;
    bone?: Bone;
    offset?: Vector;
    rotate?: Vector;
    scale?: number;
}
