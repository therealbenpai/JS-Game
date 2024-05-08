import {Classes, Interfaces, Enums} from '../../objects'

const ObjectData = {
	toolType: Enums.ToolType.Shovel,
	enchantments: new Map() as Map<number, Classes.Enchantment>,
	rank: Enums.MaterialRank.Netherite,
}

const Object = new Classes.Tool({id: 100, name: 'Netherite Shovel'}, ObjectData)

export default Object
