/**
 * @packageDocumentation
 * Weapons Collection File
 * 
 * This file exports all the weapons in the game.
 */
import { Classes } from "../objects"
import Bows from "./bows/collection";
import Explosives from "./explosives/collection";
import Guns from "./guns/collection";
import Swords from "./swords/collection";

export default new Map()
    .set("Bows", Bows)
    .set("Explosives", Explosives)
    .set("Guns", Guns)
    .set("Swords", Swords) as Map<"Bows" | "Explosives" | "Guns" | "Swords", Map<string, Classes.Weapon>>;