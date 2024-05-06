"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objects_1 = require("../../objects");
const ObjectData = {
    toolType: objects_1.default.ToolTypeEnum.SHOVEL,
    enchantments: new Map(),
    rank: objects_1.default.MaterialRankEnum.UNDESTRUCTIUM
};
const Object = new objects_1.default.Tool({ id: 100, name: 'Undestructium Shovel' }, ObjectData);
exports.default = Object;
