/**
 * @packageDocumentation
 * Blocks Collection File
 * 
 * This file exports all the blocks in the game.
 */
import { Classes } from "../objects";
import Gas from "./gas/collection";
import Liquid from "./liquid/collection";
import Solid from "./solid/collection";

export default new Map()
    .set("Gas", Gas)
    .set("Liquid", Liquid)
    .set("Solid", Solid) as Map<'Gas' | 'Solid' | 'Liquid', Map<string, Classes.Block>>;
