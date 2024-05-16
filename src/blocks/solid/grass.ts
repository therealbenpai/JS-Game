import {Classes, Interfaces, Enums} from '../../objects'

const BlockData: Interfaces.BlockInit = {
	sprite: '',
	flags: [],
	type: Enums.BlockType.Solid,
}

const Grass = new Classes.Block({ id: 2, name: 'Grass Block' }, BlockData)

export default Grass
