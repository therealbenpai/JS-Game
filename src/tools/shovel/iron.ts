import {Classes, Interfaces, Enums} from '../../objects'

const ObjectData = {
    toolType: Enums.ToolTypeEnum.SHOVEL,
    enchantments: new Map() as Map<number, Classes.Enchantment>,
    rank: Enums.MaterialRankEnum.IRON
}

const Object = new Classes.Tool({id: 100, name: 'Iron Shovel'}, ObjectData)

export default Object