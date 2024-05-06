"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objects_1 = require("../objects");
const BlockData = {
    sprite: '',
    flags: [],
    type: objects_1.Enums.BlockTypeEnum.SOLID
};
const Grass = new objects_1.Classes.Block({ id: 2, name: 'Grass Block' }, BlockData);
exports.default = Grass;
