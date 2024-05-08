import {Classes, Interfaces, Enums} from '../objects'

const BlockData: Interfaces.BlockInit = {
	sprite: '',
	flags: [],
	type: Enums.BlockType.LIQUID,
}

const Water = new Classes.Block({ id: 2, name: 'Water' }, BlockData)

export default Water
