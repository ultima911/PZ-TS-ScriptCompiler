import { Tag } from "./Tag";

export class Tags {
    tags: Tag[]
    constructor(...items: Tag[]) {
        this.tags = items;
    }

    public toString = (): string => {
        let str = '';
        this.tags.forEach((tag) => {
            str += `${tag};`
        });
        str = str.substring(0, str.length - 1);
        return str;
    }
}