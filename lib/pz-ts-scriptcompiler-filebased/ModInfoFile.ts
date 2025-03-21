import { StringBuilder } from '../common/util/StringBuilder';

/** @see https://pzwiki.net/wiki/Mod.info */
export interface ModInfoFileProps {
    /** Name of the author(s) of the mod, which, if the mod is originally yours, should be your username. */
    author?: string;

    /**
     * Description of your mod, which shows up in the mod manager. It's possible to use {@link https://pzwiki.net/wiki/ISRichTextPanel ISRichTextPanel} tags.
     * @example
     * Single Description
     * { description: ["My description here."] }
     * Multiple Descriptions
     * { description: ["My description here.", "My second description clause here."] }
     */
    description?: string[];

    /** Show a URL link in the mod manager on the page of your mod for users to click on to open in browser. This can be used for donation links for example. */
    url?: string;

    /**
     * Image which will show up in the mod manager as the mod image.
     * Multiple posters can actually be used to show multiple images, but the first one will be used as the main poster in the mod manager.
     * The rest will be in a list of images of the mod that users can click on to view.
     * The image can be in a subfolder instead of the same folder as tthe mod.info file. For example, it can be in the media folder: `media/image.png`
     * @example
     * Single Poster
     * { poster: ["poster.png"] }
     * Multiple Posters
     * { poster: ["poster.png", "showcase.png", "flying_chickens.png", "credits.png"] }
     */
    poster?: string[];

    /**
     * Image which will be used in the mod manager to put next to the name of the mod in the list of available mods.
     * This image will be small and while you can use a full image size, you do not need it.
     * You can set your poster as the icon too to not use two images.
     * The image can be in a subfolder instead of the same folder as tthe mod.info file. For example, it can be in the media folder: `media/image.png`
     */
    icon?: string;

    /** Version of the mod. */
    modversion?: string;

    /**
     * Mods required to run this mod.
     * As of Build 42, the way to require mods is done this way, if you have for example two mods with the ID theNeededMod and theOtherOne:
     * **Backslashes are optional.**
     * @example
     * Single Require
     * { require: ["theNeededMod"] }
     * Multiple Requires
     * { require: ["\theNeededMod", "theOtherOne"] }
     */
    require?: string[];

    /**
     * Mods that cannot be enabled at the same time as this mod. When enabled, the other mods will be unselectable.
     * This mod will also become unselectable if any of the other mods are enabled.
     * **Backslashes are optional.**
     * @example
     * Single Incompatible
     * { incompatible: ["theUnwantedModId"] }
     * Multiple Incompatibles
     * { incompatible: ["\theUnwantedModId", "theOtherUnwantedModId"] }
     */
    incompatible?: string[];

    /** @see https://pzwiki.net/wiki/Mod.info */
    loadModAfter?: string;

    /** @see https://pzwiki.net/wiki/Mod.info */
    loadModBefore?: string;

    /** @see https://pzwiki.net/wiki/Mod.info */
    category?: string;

    /** Name of packs that need to be loaded by the game. @see https://pzwiki.net/wiki/Mod.info */
    pack?: string;

    /**
     * Name of the tiledef with its ID that are added by the mod.
     *
     * To see which tiledef ID is available to be used for your mod, you can refer to {@link https://pzwiki.net/wiki/Tiledefs_used_by_mods Tiledefs used by mods}.
     * If you upload your mod with a new tiledef ID, you can update this list to reduce the chance of incompatibility with other mods adding tile packs.
     *
     * @example
     * { tiledef: "Excavation 2112" }
     */
    tiledef?: string;

    /** The **minimum** version of the game the mod can be used on. */
    versionMin?: string;

    /** The **maximum** version of the game the mod can be used on. */
    versionMax?: string;
}

export interface ModInfoFile extends ModInfoFileProps {}

/** @see https://pzwiki.net/wiki/Mod.info */
export class ModInfoFile {
    /** The mod ID is used in a mod list of the user or servers to activate your mod. Make sure to use something unique which isn't shared between mods. */
    id: string;

    /** This parameter defines the displayed name for your mod in the game's mod manager. */
    name: string;

    constructor(id: string, name: string, props?: ModInfoFileProps) {
        this.id = id;
        this.name = name;
        Object.assign(this, props);
    }

    public formatOutput() {
        const {
            name,
            id,
            author,
            description,
            url,
            poster,
            icon,
            modversion,
            require,
            incompatible,
            loadModAfter,
            loadModBefore,
            category,
            pack,
            tiledef,
            versionMin,
            versionMax,
        } = this;

        const sb = new StringBuilder(false);

        sb.appendLine(`name=${name}`);
        sb.appendLine(`id=${id}`);

        if (description) {
            description.forEach((desc) => {
                sb.appendLine(`description=${desc}`);
            });
        }

        if (poster) {
            poster.forEach((posterImg) => {
                sb.appendLine(`poster=${posterImg}`);
            });
        }

        if (require) {
            this.formatRequire();
            sb.append('require=');
            require.forEach((requireMod, index) => {
                sb.append(`${requireMod}`);
                if (index !== require.length - 1) {
                    sb.append(',');
                }
            });
            sb.newLine();
        }

        if (incompatible) {
            this.formatIncompatible();
            sb.append('incompatible=');
            incompatible.forEach((incompatibleMod, index) => {
                sb.append(`${incompatibleMod}`);
                if (index !== incompatible.length - 1) {
                    sb.append(',');
                }
            });
            sb.newLine();
        }

        if (author) sb.appendLine(`author=${author}`);
        if (url) sb.appendLine(`url=${url}`);
        if (icon) sb.appendLine(`icon=${icon}`);
        if (modversion) sb.appendLine(`modversion=${modversion}`);
        if (loadModAfter) sb.appendLine(`loadModAfter=${loadModAfter}`);
        if (loadModBefore) sb.appendLine(`loadModBefore=${loadModBefore}`);
        if (category) sb.appendLine(`category=${category}`);
        if (pack) sb.appendLine(`pack=${pack}`);
        if (tiledef) sb.appendLine(`tiledef=${tiledef}`);
        if (versionMin) sb.appendLine(`versionMin =${versionMin}`);
        if (versionMax) sb.appendLine(`versionMax =${versionMax}`);
    }

    private formatRequire() {
        if (this.require) this.require = this.formatBackslashes(this.require);
    }

    private formatIncompatible() {
        if (this.incompatible) this.require = this.formatBackslashes(this.incompatible);
    }

    private formatBackslashes(strings: string[]) {
        return strings?.map((require) => {
            if (require.charAt(0) !== '\\') require = '\\' + require;
            return require;
        });
    }
}
