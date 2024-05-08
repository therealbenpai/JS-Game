import {Classes, Interfaces, Enums} from '../../objects'

const ObjectData = {
	toolType: Enums.ToolType.Hoe,
	enchantments: new Map() as Map<number, Classes.Enchantment>,
	rank: Enums.MaterialRank.Stone,
}

const Object = new Classes.Tool({id: 100, name: 'Stone Hoe'}, ObjectData)

export default Object
