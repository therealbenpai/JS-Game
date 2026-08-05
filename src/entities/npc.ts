import { Classes, Interfaces, Enums } from '../objects';

const entityData: Interfaces.EntityInit = {
    hp: 10,
    str: Classes.Utilities.arrayToStats([[0, 1], [0, 0], [0, 0], [0, 0]]),
    def: Classes.Utilities.arrayToStats([[0, 0], [0, 0], [0, 0], [0, 0]]),
    type: Enums.EntityType.NPC,
};

const Entity = new Classes.Entity({ id: 3, name: 'NPC' }, entityData);

export default Entity;
