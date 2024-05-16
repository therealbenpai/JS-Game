/**
 * @packageDocumentation
 * Entities Collection File
 * 
 * This file exports all the entities in the game.
*/
import { Classes } from "../objects";
import NPC from "./npc";
import Player from "./player";
import Passive from "./passive/collection";
import Neutral from "./neutral/collection";
import Hostile from "./hostile/collection";


export default new Map()
    .set('npc', NPC)
    .set('player', Player)
    .set('passive', Passive)
    .set('neutral', Neutral)
    .set('hostile', Hostile) as Map<"npc" | "player", Classes.Entity> & Map<'passive' | 'neutral' | 'hostile', Map<string, Classes.Entity>>;
