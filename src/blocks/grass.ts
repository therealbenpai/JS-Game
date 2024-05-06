import {Classes, Interfaces, Enums} from '../objects'

const BlockData: Interfaces.BlockInitInterface = {
    sprite: '',
    flags: [],
    type: Enums.BlockTypeEnum.SOLID
}

const Grass = new Classes.Block({ id: 2, name: 'Grass Block' }, BlockData)

export default Grass