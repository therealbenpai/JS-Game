import {Classes, Interfaces, Enums} from '../../objects'

const ObjectData = {
	toolType: Enums.ToolType.Pickaxe,
	enchantments: new Map() as Map<number, Classes.Enchantment>,
	rank: Enums.MaterialRank.Diamond,
}

const Object = new Classes.Tool({id: 100, name: 'Diamond Pickaxe'}, ObjectData)

export default Object
