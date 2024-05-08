import {Classes, Interfaces, Enums} from '../../objects'

const ObjectData = {
	toolType: Enums.ToolType.HOE,
	enchantments: new Map() as Map<number, Classes.Enchantment>,
	rank: Enums.MaterialRank.INDESTRUCTIUM,
}

const Object = new Classes.Tool({id: 100, name: 'Indestructium Hoe'}, ObjectData)

export default Object
