"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objects_1 = require("../../objects");
const ObjectData = {
    toolType: objects_1.Enums.ToolTypeEnum.HOE,
    enchantments: new Map(),
    rank: objects_1.Enums.MaterialRankEnum.WOOD,
};
const Object = new objects_1.Classes.Tool({ id: 100, name: 'Wooden Hoe' }, ObjectData);
exports.default = Object;
