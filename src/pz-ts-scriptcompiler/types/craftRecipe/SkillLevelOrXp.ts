export interface SkillLevelOrXp {
    Blacksmith?: number;
    Butchering?: number;
    Carving?: number;
    Cooking?: number;
    Electricity?: number;
    FlintKnapping?: number;
    Glassmaking?: number;
    Maintenance?: number;
    Masonry?: number;
    MetalWelding?: number;
    Pottery?: number;
    Tailoring?: number;
    WoodWork?: number;
    [key: string]: number | undefined;
}
