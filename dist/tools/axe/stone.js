"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objects_1 = require("../../objects");
const ObjectData = {
    toolType: objects_1.Enums.ToolTypeEnum.AXE,
    enchantments: new Map(),
    rank: objects_1.Enums.MaterialRankEnum.STONE,
};
const Object = new objects_1.Classes.Tool({ id: 100, name: 'Stone Axe' }, ObjectData);
exports.default = Object;
