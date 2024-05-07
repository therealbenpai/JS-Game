import {Classes, Interfaces} from '../objects'

const entityData: Interfaces.EntityInitInterface = {
	hp: 20,
	str: Classes.Formatters.arrayToStats([ [ 0, 1 ], [ 0, 0 ], [ 0, 0 ], [ 0, 0 ] ]),
	def: Classes.Formatters.arrayToStats([ [ 0, 0 ], [ 0, 0 ], [ 0, 0 ], [ 0, 0 ] ]),
}

const playerData: Interfaces.PlayerInitInterface = {

}

const Player = new Classes.Player({ id: 2, name: 'Player' }, entityData, playerData)

export default Player
