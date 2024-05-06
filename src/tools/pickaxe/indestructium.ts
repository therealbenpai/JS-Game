import {Classes, Interfaces, Enums} from '../../objects'

const ObjectData = {
    toolType: Enums.ToolTypeEnum.PICKAXE,
    enchantments: new Map() as Map<number, Classes.Enchantment>,
    rank: Enums.MaterialRankEnum.INDESTRUCTIUM
}

const Object = new Classes.Tool({id: 100, name: 'Indestructium Pickaxe'}, ObjectData)

export default Object