import {Classes, Interfaces, Enums} from '../../objects'

const ObjectData = {
    toolType: Enums.ToolTypeEnum.HOE,
    enchantments: new Map() as Map<number, Classes.Enchantment>,
    rank: Enums.MaterialRankEnum.INDESTRUCTIUM
}

const Object = new Classes.Tool({id: 100, name: 'Indestructium Hoe'}, ObjectData)

export default Object