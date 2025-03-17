import StringBuilder from "../../common/util/StringBuilder";
import Item from "../item/Item";
import { PZModule } from "../modules/PZModule";
import { Logger } from "../../common/util/Logger";

export abstract class Compiler {
    public static compile(pzModule: PZModule, stringBuilder?: StringBuilder) {
        const sb = stringBuilder ?? new StringBuilder();

        sb.appendLine(`module ${pzModule.id}`);
        sb.openBracket();

        Compiler.buildImports(pzModule, sb);

        Compiler.buildItems(pzModule, sb);

        sb.closeBracket();

        if (stringBuilder) return sb;
        else return sb.out();
    }

    private static buildImports(pzModule: PZModule, sb: StringBuilder) {
        if (!pzModule.hasImports) {
            Logger.log(`No imports found for module: ${pzModule.id}`)
            return;
        }

        sb.appendLine(`imports`);
        sb.openBracket();

        pzModule.imports.forEach((pzImport: PZModule) => { sb.appendLine(pzImport.id); });

        sb.closeBracket();
    }

    private static buildItems(pzModule: PZModule, sb: StringBuilder) {
        if (!pzModule.hasItems) {
            Logger.info(`No items found for module: ${pzModule.id}`)
            return;
        }

        pzModule.items.forEach((item: Item) => { 
        sb.appendLine(`item ${item.id}`);
        sb.openBracket();

        Object.entries(item).forEach((entry: [string, unknown]) => {
            const key = entry[0];
            const value = entry[1];
            if (key === 'module' || key === 'toString') { /* SKIP */ }
            else if (value === undefined) { 
                Logger.error(`Value is undefined for item property: ${key} in item: ${item}`);
            }
            else if (!['string', 'number', 'boolean', 'object'].includes(typeof value)) { 
                Logger.warn(`Item property: ${key} = ${value} is of type <${typeof value}>`);
            }
            else {
                sb.appendLineProperty(`${key} = ${value}`);
            }
        });

        sb.closeBracket();
        });
    }
}