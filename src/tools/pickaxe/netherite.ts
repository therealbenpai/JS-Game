import {Classes, Interfaces, Enums} from '../../objects'

const ObjectData = {
	toolType: Enums.ToolType.PICKAXE,
	enchantments: new Map() as Map<number, Classes.Enchantment>,
	rank: Enums.MaterialRank.NETHERITE,
}

const Object = new Classes.Tool({id: 100, name: 'Netherite Pickaxe'}, ObjectData)

export default Object
