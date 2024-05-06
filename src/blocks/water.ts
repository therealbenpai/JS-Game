import {Classes, Interfaces, Enums} from '../objects'

const BlockData: Interfaces.BlockInitInterface = {
    sprite: '',
    flags: [],
    type: Enums.BlockTypeEnum.LIQUID
}

const Water = new Classes.Block({ id: 2, name: 'Water' }, BlockData)

export default Water