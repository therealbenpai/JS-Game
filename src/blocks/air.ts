import {Classes, Interfaces, Enums} from '../objects'

const BlockData: Interfaces.BlockInitInterface = {
    sprite: '',
    flags: [],
    type: Enums.BlockTypeEnum.GAS
}

const Air = new Classes.Block({ id: 2, name: 'Air' }, BlockData)

export default Air