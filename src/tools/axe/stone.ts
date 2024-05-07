import {Classes, Interfaces, Enums} from '../../objects'

const ObjectData = {
	toolType: Enums.ToolTypeEnum.AXE,
	enchantments: new Map() as Map<number, Classes.Enchantment>,
	rank: Enums.MaterialRankEnum.STONE,
}

const Object = new Classes.Tool({id: 100, name: 'Stone Axe'}, ObjectData)

export default Object
