"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objects_1 = require("../objects");
const entityData = {
    hp: 20,
    str: objects_1.Classes.Formatters.arrayToStats([[0, 1], [0, 0], [0, 0], [0, 0]]),
    def: objects_1.Classes.Formatters.arrayToStats([[0, 0], [0, 0], [0, 0], [0, 0]]),
};
const playerData = {};
const Player = new objects_1.Classes.Player({ id: 2, name: 'Player' }, entityData, playerData);
exports.default = Player;
