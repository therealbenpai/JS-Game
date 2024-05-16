/**
 * @packageDocumentation
 * Blocks Collection File
 * 
 * This file exports all the blocks in the game.
 */
import { Classes } from "../../objects";
import Grass from "./grass";

export default new Map()
	.set("grass", Grass) as Map<string, Classes.Block>;
