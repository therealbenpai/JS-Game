import {Classes, Interfaces, Enums} from '../../objects'

const ObjectData = {
    toolType: Enums.ToolTypeEnum.AXE,
    enchantments: new Map() as Map<number, Classes.Enchantment>,
    rank: Enums.MaterialRankEnum.GOLD
}

const Object = new Classes.Tool({id: 100, name: 'Golden Axe'}, ObjectData)

export default Object