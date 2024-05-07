import {Classes, Interfaces, Enums} from '../../objects'

const ObjectData = {
	toolType: Enums.ToolTypeEnum.AXE,
	enchantments: new Map() as Map<number, Classes.Enchantment>,
	rank: Enums.MaterialRankEnum.STEEL,
}

const Object = new Classes.Tool({id: 100, name: 'Steel Axe'}, ObjectData)

export default Object
