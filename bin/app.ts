import fs from 'fs';
import { Logger } from '../lib/pz-ts-scriptcompiler/util/Logger';
import { camelCase } from 'lodash';
import { StringBuilder } from '../lib/pz-ts-scriptcompiler/util/StringBuilder';
import { inspect } from 'util';
import { AnyItem } from '../lib/pz-ts-scriptcompiler/types/items/item/Item';

function createItemsFile(items: AnyItem[]) {
    fs.mkdirSync('./lib/base-module/', { recursive: true });
    fs.writeFileSync('./lib/base-module/items.ts', buildTSfromItems(items));
}

function readFiles(dirName: string) {
    let items: AnyItem[] = [];

    const fileNames = fs.readdirSync(dirName, { encoding: 'utf-8', recursive: true });

    fileNames.forEach((fileName) => {
        const path = dirName + fileName;
        const stat = fs.statSync(path);
        if (stat.isFile()) {
            const fileContents = fs.readFileSync(path, 'utf-8');
            const fileItems = onFileContent(fileName, fileContents);
            items = items.concat(fileItems);
        }
    });

    createItemsFile(items);
}

function buildTSfromItems(items: AnyItem[]) {
    const baseModule: Record<string, any> = {};
    const itemsObj: Record<string, any> = {};
    items.forEach((item) => {
        const genericItem = item as Record<string, unknown>;
        const itemId = genericItem.id;
        if (!itemId || typeof itemId !== 'string') {
            Logger.error(`appropriate itemId not found for: ${JSON.stringify(item)}`);
        } else {
            delete genericItem.id;
            itemsObj[itemId] = genericItem;
        }
    });

    baseModule.items = itemsObj;

    const sb = new StringBuilder(true);
    sb.append(`export const Base = ${inspect(baseModule)}`);
    return sb.out();
}

function onFileContent(fileName: string, content: string) {
    Logger.log(`Found file: ${fileName}`);
    const items = buildItemsFromContent(content);
    return items;
}

function buildItemsFromContent(content: string) {
    const items: AnyItem[] = [];

    const regex = /item[\s]*?(?<name>[\S]*?)[\s]*?{(?<properties>[\s\S]*?)}/gim;
    let match = null;
    while ((match = regex.exec(content)) !== null) {
        const itemName = match?.groups?.name;
        const itemProperties = match?.groups?.properties?.replace(/[^\S ]*/gm, '');

        if (itemName && itemProperties) {
            Logger.log(`Found Item: ${itemName}`);
            const item = buildItemFromString(itemName, itemProperties);
            items.push(item);
        }
    }

    return items;
}

function buildItemFromString(itemName: string, itemProperties: string) {
    const item: Record<string, unknown> = {
        id: itemName,
    };

    itemProperties?.split(',').forEach((property) => {
        const pair = property.split('=');
        if (!pair || pair.length <= 0) {
            const err = new Error(`Could not split property: ${property} on "="`);
            Logger.error(err);
            throw err;
        }
        const key = camelCase(pair[0])?.trim();
        const value = pair[1]?.trim();
        if (key && value) item[key] = value;
    });

    return item;
}

readFiles(`./exampleData/`);
