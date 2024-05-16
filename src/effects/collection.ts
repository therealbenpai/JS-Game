/**
 * @packageDocumentation
 * Effects Collection File
 * 
 * This file exports all the effects in the game.
 */
import InvisibilityIn from './invisibility';
import NightVisionIn from './nightVision';
import WaterBreathingIn from './waterBreathing';
import { Classes } from "../objects";

export default new Map()
    .set("invisibility", InvisibilityIn)
    .set("nightVision", NightVisionIn)
    .set("waterBreathing", WaterBreathingIn) as Map<string, Classes.Effect>;
