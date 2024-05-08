"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objects_1 = require("../../objects");
const ObjectData = {
    toolType: objects_1.Enums.ToolType.AXE,
    enchantments: new Map(),
    rank: objects_1.Enums.MaterialRank.NETHERITE,
};
const Object = new objects_1.Classes.Tool({ id: 100, name: 'Netherite Axe' }, ObjectData);
exports.default = Object;
