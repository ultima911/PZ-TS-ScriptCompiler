import { ReplaceOnUseOn } from "./ReplaceOnUseOn";

export class ReplaceTypes {
    replaceTypes: ReplaceOnUseOn[];

    constructor(...replaceOnUseOn: ReplaceOnUseOn[]) {
        this.replaceTypes = replaceOnUseOn;
    }

    public toString = (): string => {
        let str = '';
        this.replaceTypes.forEach((replaceType) => {
            str += `${replaceType.source} ${replaceType.result};`
        });
        str = str.substring(0, str.length - 1);
        return str;
    }
}