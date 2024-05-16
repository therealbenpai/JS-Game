/**
 * @packageDocumentation
 * Pickaxes Collection File
 * 
 * This file exports all the pickaxes in the game.
 */
import { Classes } from "../../objects";
import Diamond from "./diamond";
import Gold from "./gold";
import Indestructium from "./indestructium";
import Iron from "./iron";
import Netherite from "./netherite";
import Steel from "./steel";
import Stone from "./stone";
import Wood from "./wood";

export default new Map()
	.set("diamond", Diamond)
	.set("gold", Gold)
	.set("indestructium", Indestructium)
	.set("iron", Iron)
	.set("netherite", Netherite)
	.set("steel", Steel)
	.set("stone", Stone)
	.set("wood", Wood) as Map<string, Classes.Tool>;
