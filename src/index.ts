/**
 * @pacakgeDocumentation
 * Index (Main) File
 * 
 * This is the main file for the game engine.
 * 
 * It exports the main game object, which is a singleton object that holds all the data for the game.
 */
import Objects from './objects'
import Data from './collection'

/**
 * The ActiveGame constant is the main class that holds all the data for the game.
 * 
 * It is a singleton class, meaning that there is only one instance of it.
 * 
 * It is used to store all the data for the game, such as the player, the world, the inventory, etc.
 * 
 * It is also used to store the current state of the game, such as the current level, the current score, etc.
 * @constant ActiveGame
 */
const ActiveGame = new Objects.Class.Game({});

export default {
    Game: ActiveGame,
    Objects: Data,
}
