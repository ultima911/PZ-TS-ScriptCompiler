import fs from 'fs';
import { Logger } from '../lib/pz-ts-scriptcompiler/util/Logger';
import { camelCase } from 'lodash';
import { AnyItem } from '../lib/pz-ts-scriptcompiler/types/items/item/Item';

async function createItemsFile(items: AnyItem[]) {
    fs.mkdirSync('./lib/base-module/', { recursive: true });
    fs.writeFileSync('./lib/base-module/items.ts', JSON.stringify(items));
    // TODO: Fix the async issue
}

async function readFiles(dirname: string, onFileContent: Function, onError: Function) {
    const items: AnyItem[] = [];
    fs.readdir(dirname, function (err, filenames) {
        if (err) {
            onError(err);
            return;
        }
        filenames.forEach(function (filename) {
            fs.readFile(dirname + filename, 'utf-8', function (err, content) {
                if (err) {
                    onError(err);
                    return;
                }
                const fileItems = onFileContent(filename, content);
                Logger.log(JSON.stringify(fileItems));
                items.concat(fileItems);
            });
        });
    });
    createItemsFile(items);
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

readFiles(`./exampleData/items/`, onFileContent, (err: unknown) => Logger.error(String(err)));
