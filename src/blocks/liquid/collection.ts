/**
 * @packageDocumentation
 * Blocks Collection File
 * 
 * This file exports all the blocks in the game.
 */
import { Classes } from "../../objects";
import Water from "./water";

export default new Map()
	.set("water", Water) as Map<string, Classes.Block>;
