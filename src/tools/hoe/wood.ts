import {Classes, Interfaces, Enums} from '../../objects'

const ObjectData = {
	toolType: Enums.ToolType.HOE,
	enchantments: new Map() as Map<number, Classes.Enchantment>,
	rank: Enums.MaterialRank.WOOD,
}

const Object = new Classes.Tool({id: 100, name: 'Wooden Hoe'}, ObjectData)

export default Object
