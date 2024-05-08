import {Classes, Interfaces, Enums} from '../../objects'

const ObjectData = {
	toolType: Enums.ToolType.AXE,
	enchantments: new Map() as Map<number, Classes.Enchantment>,
	rank: Enums.MaterialRank.GOLD,
}

const Object = new Classes.Tool({id: 100, name: 'Golden Axe'}, ObjectData)

export default Object
