import {Classes, Interfaces, Enums} from '../objects'

const BlockData: Interfaces.BlockInit = {
	sprite: '',
	flags: [],
	type: Enums.BlockType.GAS,
}

const Air = new Classes.Block({ id: 2, name: 'Air' }, BlockData)

export default Air
