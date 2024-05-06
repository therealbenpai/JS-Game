import {Classes, Interfaces, Enums} from '../../objects'

const ObjectData = {
    toolType: Enums.ToolTypeEnum.PICKAXE,
    enchantments: new Map() as Map<number, Classes.Enchantment>,
    rank: Enums.MaterialRankEnum.NETHERITE
}

const Object = new Classes.Tool({id: 100, name: 'Netherite Pickaxe'}, ObjectData)

export default Object