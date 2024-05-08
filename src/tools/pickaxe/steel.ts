import {Classes, Interfaces, Enums} from '../../objects'

const ObjectData = {
	toolType: Enums.ToolType.Pickaxe,
	enchantments: new Map() as Map<number, Classes.Enchantment>,
	rank: Enums.MaterialRank.Steel,
}

const Object = new Classes.Tool({id: 100, name: 'Steel Pickaxe'}, ObjectData)

export default Object
