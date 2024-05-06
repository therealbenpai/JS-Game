"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objects_1 = require("../../objects");
const ObjectData = {
    toolType: objects_1.Enums.ToolTypeEnum.PICKAXE,
    enchantments: new Map(),
    rank: objects_1.Enums.MaterialRankEnum.GOLD
};
const Object = new objects_1.Classes.Tool({ id: 100, name: 'Golden Pickaxe' }, ObjectData);
exports.default = Object;