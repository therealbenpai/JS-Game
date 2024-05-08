import {Classes, Interfaces, Enums} from '../../objects'

const ObjectData = {
	toolType: Enums.ToolType.AXE,
	enchantments: new Map() as Map<number, Classes.Enchantment>,
	rank: Enums.MaterialRank.STEEL,
}

const Object = new Classes.Tool({id: 100, name: 'Steel Axe'}, ObjectData)

export default Object
