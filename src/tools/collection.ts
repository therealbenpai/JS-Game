/**
 * @packageDocumentation
 * Tools Collection File
 * 
 * This file exports all the tools in the game.
 */
import { Classes } from "../objects";
import Axes from "./axe/collection";
import Hoes from "./hoe/collection";
import Pickaxes from "./pickaxe/collection";
import Shovels from "./shovel/collection";

export default new Map()
    .set("Axes", Axes)
    .set("Hoes", Hoes)
    .set("Pickaxes", Pickaxes)
    .set("Shovels", Shovels) as Map<"Axes" | "Hoes" | "Shovels" | "Pickaxes", Map<string, Classes.Tool>>;
