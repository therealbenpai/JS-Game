import {Classes, Interfaces, Enums} from '../../objects'

const ObjectData = {
	toolType: Enums.ToolType.SHOVEL,
	enchantments: new Map() as Map<number, Classes.Enchantment>,
	rank: Enums.MaterialRank.DIAMOND,
}

const Object = new Classes.Tool({id: 100, name: 'Diamond Shovel'}, ObjectData)

export default Object
