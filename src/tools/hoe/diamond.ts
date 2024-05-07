import {Classes, Interfaces, Enums} from '../../objects'

const ObjectData = {
	toolType: Enums.ToolTypeEnum.HOE,
	enchantments: new Map() as Map<number, Classes.Enchantment>,
	rank: Enums.MaterialRankEnum.DIAMOND,
}

const Object = new Classes.Tool({id: 100, name: 'Diamond Hoe'}, ObjectData)

export default Object
