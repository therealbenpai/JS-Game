/* eslint-disable @typescript-eslint/no-namespace */

import { EventEmitter } from 'node:events';
import _ from 'lodash';
import { createHash, randomInt } from 'node:crypto';
import { GeneralEncrypt, GeneralSign, importJWK, type GeneralJWS } from 'jose';
import { readFileSync } from 'fs';
import { join } from 'path';
import z from 'zod';

/**
 * @packageDocumentation
 * Objects Package
 *
 * A simple library including many of the classes, interfaces, and types used within the game.
 */
declare namespace Interfaces {
    /**
     * Contains data relating to the Attack Damage that an entity deals
     */
    export interface AttackClassStats {
        /**
         * Physical Damage Modifier Data
         */
        phys: StatusModification;
        /**
         * Magical Damage Modifier Data
         */
        magic: StatusModification;
        /**
         * Psychological Damage Modifier Data
         */
        psych: StatusModification;
        /**
         * Global Damage Modifier Data
         */
        global: StatusModification;
    }
    /**
     * Base initialization interface used when initializing a class which extends the
     * {@link Classes.InternalData `Classes.InternalData`} class.
     */
    export interface BaseInit<ID extends number = number> extends Omit<InternalDataInit<ID>, 'type'> {
    }
    /**
     * Internal data within the {@link Classes.Block `Classes.Block`} class
     */
    export interface Block<ID extends number = number> extends InternalData<ID> {
        /**
         * The path to the sprite (excluding the `/assets` dir)
         */
        sprite: string;
        /**
         * The block type
         */
        blockType: Enums.BlockType;
        /**
         * The flags for the block
         */
        flags: Enums.BlockFlags | 0;
    }
    /**
     * Extended version of the {@link Block Block Interface}
     *
     * Included all of the functions that the {@link Classes.Block `Classes.Block`} class contains
     */
    export interface BlockFunctions extends InternalFunctions, Block {
    }
    /**
     * Initialization data used to initialize the {@link Classes.Block `Classes.Block`} class
     */
    export interface BlockInit {
        /**
         * The path to the sprite (excluding the `/assets` dir)
         */
        sprite: string;
        /**
         * The block type
         */
        type: Enums.BlockType;
        /**
         * The flags for the block
         */
        flags: Enums.BlockFlags[] | [0];
    }
    /**
     * Contains data relating to the damage dealt to an entity
     */
    export interface DamageData<T extends Enums.DamageType> {
        /**
         * Amount of damage dealt to the entity
         */
        amm: number;
        /**
         * Type of damage taken
         */
        type: T;
    }
    /**
     * Internal data within the {@link Classes.Effect `Classes.Effect`} class
     */
    export interface Effect<ID extends number = number> extends InternalData<ID> {
        /**
         * The Stats modifier data that the effect provides
         */
        modifiedStats: EntityStatsMod;
    }
    /**
     * Extended version of the {@link Effect Effect Interface}
     *
     * Included all of the functions that the {@link Classes.Effect `Classes.Effect`} class contains
     */
    export interface EffectFunctions extends InternalFunctions, Effect {
    }
    /**
     * Initialization data used to initialize the {@link Classes.Effect `Classes.Effect`} class
     */
    export interface EffectInit {
        /**
         * The Stats modifier data that the effect provides
         */
        stats: EntityStatsMod;
    }
    /**
     * Internal data within the {@link Classes.Enchantment `Classes.Enchantment`} class
     */
    export interface Enchantment<ID extends number = number> extends InternalData<ID> {
        /**
         * Identifier of the enchantment
         */
        enchantId: number;
        /**
         * All of the modifiers that the enchantment provides
         */
        enchantmentData: EnchantmentData;
    }
    /**
     * Full Enchantment Data used within the
     * {@link Classes.Enchantment `Classes.Enchantment`} class
     */
    export interface EnchantmentData {
        /**
         * Stats Modifiers for items (Tools, Weapons, Food, etc.)
         */
        itemModifiers: Partial<{ [key in Types.EnchantmentItemModifiers]: number } & { efficiencyModifier: number }>;
        /**
         * Stats Modifiers for Entities (Armour, Food Effects, etc.)
         */
        entityModifiers: Partial<{ [key in Types.EnchantmentEntityModifiers]: number }>;
        /**
         * Effects for entities wearing enchanted items (Armour only)
         */
        effects: Partial<{ [key in Types.EnchantmentEffects]: EnchantmentEffect }>;
    }
    /**
     * Keys found in the objects used in the
     * {@link EnchantmentData.effects Effects} object within the
     * {@link EnchantmentData Enchantment Data Interface}
     */
    export interface EnchantmentEffect {
        /**
         * Determines if the entity requires the full armour set to receive the specified effect
         */
        requireFullSet: boolean;
        /**
         * Determines if the armor piece provides the specified effect
         */
        activated: boolean;
    }
    /**
     * Extended version of the {@link Enchantment Enchantment Interface}
     *
     * Included all of the functions that the {@link Classes.Enchantment `Classes.Enchantment`} class contains
     */
    export interface EnchantmentFunction extends InternalFunctions, Enchantment {
        /**
         * Adjusts a data point of the enchantment
         * @param modifierKey The key of which identifies the enchantment data section to alter
         * @param newValue The new value of the specified data point
         */
        adjustModifiers(modifierKey: Types.EnchantmentKeys, newValue: number | boolean): ThisType<Enchantment>;
        /**
         * Retrieves a data point from the enchantment
         * @param modifierKey The key of which identifies the enchantment data section to retrieve
         */
        getModifier(modifierKey: Types.EnchantmentKeys): number | boolean;
    }
    /**
     * Initialization data used to initialize the {@link Classes.Enchantment `Classes.Enchantment`} class
     */
    export interface EnchantmentInit {
        /**
         * The identifier for the enchantment
         */
        id: number;
        /**
         * All of the modifiers that the enchantment provides
         */
        data: EnchantmentData;
    }
    /**
     * Internal data within the {@link Classes.Entity `Classes.Entity`} class
     */
    export interface Entity {
        /**
         * The health points that the entity has
         */
        hp: ItemBaseRemainingStats;
        /**
         * The defense stats that the entity has
         */
        def: AttackClassStats;
        /**
         * The strength stats that the entity has
         */
        str: AttackClassStats;
        /**
         * The movement velocity that the entity has
         */
        vol: Set<number>;
        /**
         * The inventory for the entity
         */
        inventory: Classes.StorageContainer;
        /**
         * The effects that the entity has
         */
        effects: Map<number, Classes.Effect>;
    }
    /**
     * Extended version of the {@link Entity Entity Interface}
     *
     * Included all of the functions that the {@link Classes.Entity `Classes.Entity`} class contains
     */
    export interface EntityFunction extends InternalFunctions, Entity {
        /**
         * Deal damage to the target entity using a strict amount and damage type
         * @param damage Data for the damage to deal
         *
         */
        takeDamage(damage: DamageData<Enums.DamageType>): ThisType<Entity>;
        /**
         * Retrieves the base health stat
         */
        getBaseHealth(): number;
        /**
         * Adds a set amount to the base health
         * @param amount Data for the HP to add
         */
        addBaseHealth(amount: number): ThisType<Entity>;
        /**
         * Removes a set amount from the base health
         * @param amount Data for the HP to remove
         */
        removeBaseHealth(amount: number): ThisType<Entity>;
        /**
         * Retrieves the remaining health stat
         */
        getRemainingHealth(): number;
        /**
         * Adds a set amount to the remaining health (capped at the base value)
         * @param amount Data for the HP to add
         */
        addRemainingHealth(amount: number): ThisType<Entity>;
        /**
         * Removes a set amount from the remaining health
         * @param amount Data for the HP to remove
         */
        removeRemainingHealth(amount: number): ThisType<Entity>;
        /**
         * Retrieves the active effects
         */
        getEffects(): Map<number, Classes.Effect>;
        /**
         * Adds an effect to the entity
         * @param effect The effect to add to the entity
         */
        addEffect(effect: Classes.Effect): ThisType<Entity>;
        /**
         * Removes an effect to the entity
         * @param id The ID of the effect to remove
         */
        removeEffect(id: number): ThisType<Entity>;
        /**
         * Clears all of the effects from the entity
         */
        clearEffects(): ThisType<Entity>;
    }
    /**
     * Initialization data used to initialize the {@link Classes.Entity `Classes.Entity`} class
     */
    export interface EntityInit {
        /**
         * The health points that the entity has
         */
        hp: number;
        /**
         * The defense stats that the entity has
         */
        def: AttackClassStats;
        /**
         * The strength stats that the entity has
         */
        str: AttackClassStats;
        /**
         * The type of entity that the object is
         */
        type: Enums.EntityType;
    }
    /**
     * Full data dealing with entity stats modification
     */
    export interface EntityStatsMod {
        /**
         * Health Modifier Data
         */
        health?: StatusModification;
        /**
         * Physical Damage Modifier Data
         */
        physDamage?: StatusModification;
        /**
         * Magical Damage Modifier Data
         */
        magicDamage?: StatusModification;
        /**
         * Psychological Damage Modifier Data
         */
        psychDamage?: StatusModification;
        /**
         * Global Damage Modifier Data
         */
        globalDamage?: StatusModification;
        /**
         * Physical Defense Modifier Data
         */
        physDefense?: StatusModification;
        /**
         * Magical Defense Modifier Data
         */
        magicDefense?: StatusModification;
        /**
         * Psychological Defense Modifier Data
         */
        psychDefense?: StatusModification;
        /**
         * Global Defense Modifier Data
         */
        globalDefense?: StatusModification;
        /**
         * Speed Modifier Data
         */
        speed?: StatusModification;
        /**
         * Mana Modifier Data
         */
        mana?: StatusModification;
        /**
         * Intelligence Modifier Data
         */
        intelligence?: StatusModification;
        /**
         * Luck Modifier Data
         */
        luck?: StatusModification;
    }
    /**
     * Internal data within the {@link Classes.Food `Classes.Food`} class
     */
    export interface Food<ID extends number = number> extends InternalData<ID> {
    }
    /**
     * Extended version of the {@link Food Food Interface}
     *
     * Included all of the functions that the {@link Classes.Food `Classes.Food`} class contains
     */
    export interface FoodFunctions extends InternalFunctions, Food {
    }
    /**
     * Initialization data used to initialize the {@link Classes.Food `Classes.Food`} class
     */
    export interface FoodInit {
    }
    /**
     * Internal data within the {@link Classes.Game `Classes.Game`} class
     */
    export interface Game {
        /**
         * The seed value of the game world
         */
        seed: number;
        /**
         * The name of the game world
         */
        name: string;
        /**
         * The last time the game was saved
         */
        lastSaved: Date;
        /**
         * The difficulty setting of the game
         */
        difficulty: 'peaceful' | 'easy' | 'normal' | 'hard';
        /**
         * The current version of the game
         */
        currentVersion: `v${number}.${number}.${number}`;
        /**
         * Whether experimental features are enabled
         */
        experimentalFeatures: boolean;
        /**
         * The set of resource pack IDs applied to the game
         */
        resourcePacks: Set<string>;
        /**
         * The set of behavior pack IDs applied to the game
         */
        behaviorPacks: Set<string>;
        /**
         * The map of entities in the game
         */
        entities: Map<number, Classes.Entity>;
        /**
         * The map of blocks in the game
         */
        blocks: Map<Classes.Coordinate3D, Classes.Block>;
    }
    /**
     * Extended version of the {@link Game Game Interface}
     *
     * Included all of the functions that the {@link Classes.Game `Classes.Game`} class contains
     */
    export interface GameFunction extends Game {

    }
    /**
     * Initialization data used to initialize the {@link Classes.Game `Classes.Game`} class
     */
    export interface GameInit {

    }
    /**
     * Initialization data used to initialize the
     * {@link Classes.InternalData `Classes.InternalData`} class
     */
    export interface InternalDataInit<ID extends number = number> {
        /**
         * The internal ID of the object
         */
        id: ID;
        /**
         * The human-readable display name of the object
         */
        name: string;
        /**
         * The data type of the object
         */
        type: Types.Nullable<Enums.DataType>;
    }
    /**
     * Internal data within the
     * {@link Classes.InternalData `Classes.InternalData`} class
     */
    export interface InternalData<ID extends number = number> extends InternalDataInit<ID> { }
    /**
     * Extended version of the {@link InternalData Internal Data Interface}
     *
     * Included all of the functions that the {@link Classes.InternalData `Classes.InternalData`} class contains
     */
    export interface InternalFunctions<ID extends number = number> extends InternalData<ID> {
        /**
         * Returns a JSON Object representation of the internal data within the class
         */
        toJSON: () => Record<string, any>;
    }
    /**
     * Internal data within the {@link Classes.Vector2 `Classes.Vector2`} class
     */
    export interface Vector2 {}
    /**
     * Extended version of the {@link Vector2 Vector2 Interface}
     *
     * Included all of the functions that the {@link Classes.Vector2 `Classes.Vector2`} class contains
     */
    export interface Vector2Functions extends Vector2 {}
    /**
     * Initialization data used to initialize the {@link Classes.Vector2 `Classes.Vector2`} class
     */
    export interface Vector2Init {
        /**
         * The X value of the vector
         */
        x: number;
        /**
         * The Y value of the vector
         */
        y: number;
    }
    /**
     * Internal data within the {@link Classes.Vector3 `Classes.Vector3`} class
     */
    export interface Vector3 extends Vector2 {}
    /**
     * Extended version of the {@link Vector3 Vector3 Interface}
     *
     * Included all of the functions that the {@link Classes.Vector3 `Classes.Vector3`} class contains
     */
    export interface Vector3Functions extends Vector2Functions, Vector3 {}
    /**
     * Initialization data used to initialize the {@link Classes.Vector3 `Classes.Vector3`} class
     */
    export interface Vector3Init extends Vector2Init {
        /**
         * The Z value of the vector
         */
        z: number;
    }
    /**
     * Internal data within the {@link Classes.Vector2 `Classes.Coordinate2D`} class
     */
    export interface Coordinate2D {}
    /**
     * Extended version of the {@link Coordinate2D Coordinate2D Interface}
     *
     * Included all of the functions that the {@link Classes.Coordinate2D `Classes.Coordinate2D`} class contains
     */
    export interface Coordinate2DFunctions extends Coordinate2D {}
    /**
     * Initialization data used to initialize the {@link Classes.Coordinate2D `Classes.Coordinate2D`} class
     */
    export interface Coordinate2DInit {
        /**
         * The X value of the vector
         */
        x: number;
        /**
         * The Y value of the vector
         */
        y: number;
    }
    /**
     * Internal data within the {@link Classes.Vector3 `Classes.Coordinate3D`} class
     */
    export interface Coordinate3D extends Coordinate2D {}
    /**
     * Extended version of the {@link Coordinate3D Coordinate3D Interface}
     *
     * Included all of the functions that the {@link Classes.Coordinate3D `Classes.Coordinate3D`} class contains
     */
    export interface Coordinate3DFunctions extends Coordinate2DFunctions, Coordinate3D {}
    /**
     * Initialization data used to initialize the {@link Classes.Coordinate3D `Classes.Coordinate3D`} class
     */
    export interface Coordinate3DInit extends Coordinate2DInit {
        /**
         * The Z value of the vector
         */
        z: number;
    }
    /**
     * Interface for data points which have a `base` and a `remaining` value
     */
    export interface ItemBaseRemainingStats {
        /**
         * The base amount
         */
        base: number;
        /**
         * The remaining amount
         */
        remaining: number;
    }
    /**
     * Internal data within the {@link Classes.Material `Classes.Material`} class
     */
    export interface Material<ID extends number = number> extends InternalData<ID> {
    }
    /**
     * Extended version of the {@link Material Material Interface}
     *
     * Included all of the functions that the {@link Classes.Material `Classes.Material`} class contains
     */
    export interface MaterialFunction extends InternalFunctions, Material {
    }
    /**
     * Initialization data used to initialize the {@link Classes.Material `Classes.Material`} class
     */
    export interface MaterialInit {
    }
    /**
     * Layout of entity/item stats
     */
    export interface StatusModification {
        /**
         * The percentage modifier (`x.yz` ==> `xyz`%)
         */
        percentage: number;
        /**
         * The integer modifier (`x` ==> `+ x`)
         */
        integer: number;
    }
    /**
     * Internal data within the {@link Classes.StorageContainer `Classes.StorageContainer`} class
     */
    export interface StorageContainer {
        /**
         * The amount of slots available
         */
        availableSlots: number;
        /**
         * A map containing the Storage Slots
         */
        slots: Map<number, Classes.StorageSlot>;
    }
    /**
     * Extended version of the {@link StorageContainer Storage Container Interface}
     *
     * Included all of the functions that the {@link Classes.StorageContainer `Classes.StorageContainer`} class contains
     */
    export interface StorageContainerFunctions extends StorageContainer {
    }
    /**
     * Initialization data used to initialize the {@link Classes.StorageContainer `Classes.StorageContainer`} class
     */
    export interface StorageContainerInit {
        /**
         * The amount of available slots
         */
        slots: number;
    }
    /**
     * Internal data within the {@link Classes.StorageSlot `Classes.StorageSlot`} class
     */
    export interface StorageSlot {
        /**
         * The ID of the slot
         */
        slotId: number;
        /**
         * The object data for the slot
         */
        object: Classes.Block | Classes.Food | Classes.Weapon | Classes.Tool | UndefinedObject;
    }
    /**
     * Extended version of the {@link StorageSlot Storage Slot Interface}
     *
     * Included all of the functions that the {@link Classes.StorageSlot `Classes.StorageSlot`} class contains
     */
    export interface StorageSlotFunctions extends StorageSlot {
    }
    /**
     * Initialization data used to initialize the {@link Classes.StorageSlot `Classes.StorageSlot`} class
     */
    export interface StorageSlotInit {
        /**
         * The ID of the slot
         */
        id: number;
        /**
         * The object data for the slot
         */
        obj: Classes.Block | Classes.Food | Classes.Weapon | Classes.Tool | undefined;
    }
    /**
     * Internal data within the {@link Classes.Tool `Classes.Tool`} class
     */
    export interface Tool<ID extends number = number> extends InternalData<ID> {
        /**
         * The tool type
         */
        toolType: Enums.ToolType;
        /**
         * The material rank of the tool
         */
        rank: Enums.MaterialRank;
        /**
         * The durability stats for the tool
         */
        durability: ItemBaseRemainingStats;
        /**
         * The map contains all the enchantments on the tool
         */
        enchantments: Map<number, Classes.Enchantment>;
    }
    /**
     * Extended version of the {@link Tool Tool Interface}
     *
     * Included all of the functions that the {@link Classes.Tool `Classes.Tool`} class contains
     */
    export interface ToolFunction extends InternalFunctions, Tool {
    }
    /**
     * Initialization data used to initialize the {@link Classes.Tool `Classes.Tool`} class
     */
    export interface ToolInit {
        /**
         * The tool type
         */
        toolType: Enums.ToolType;
        /**
         * The material rank of the tool
         */
        rank: Enums.MaterialRank;
        /**
         * The map contains all the enchantments on the tool
         */
        enchantments: Map<number, Classes.Enchantment>;
    }
    /**
     * The undefined object class type
     */
    export interface UndefinedObject {
        name: string;
        type: undefined;
        toJSON: () => ({ id: 1; name: ''; type: undefined });
    }
    /**
     * Internal data within the {@link Classes.Weapon `Classes.Weapon`} class
     *
     * (Extends {@link Tool Tool Interface})
     */
    export interface Weapon extends Tool {
    }
    /**
     * Extended version of the {@link Weapon Weapon Interface}
     *
     * Included all of the functions that the {@link Classes.Weapon `Classes.Weapon`} class contains
     *
     * (Extends the {@link ToolFunction Tool Functions Interface})
     */
    export interface WeaponFunction extends Weapon, ToolFunction {
    }
    /**
     * Initialization data used to initialize the {@link Classes.Weapon `Classes.Weapon`} class
     */
    export interface WeaponInit {
    }
}

declare namespace Types {
    /**
     * Nullable Type
     */
    export type Nullable<T> = T | null | undefined;

    type DamageTypes = 'physical' | 'magic' | 'psychological' | 'global' | 'base';
    type AttackClassStatsKeys = `${DamageTypes}${'Attack' | 'Defense'}`;
    type NormalVectors = 'health' | 'regeneration' | 'speed' | 'waterMovement';
    /**
     * Keys within the
     * {@link Interfaces.EnchantmentData.itemModifiers Item Modifiers} section of the
     * {@link Interfaces.EnchantmentData Enchantment Data Interface}
     */
    export type EnchantmentItemModifiers = `${`${DamageTypes}Attack` | 'durability'}Modifier`;
    /**
     * Keys within the
     * {@link Interfaces.EnchantmentData.entityModifiers Entity Modifiers} section of the
     * {@link Interfaces.EnchantmentData Enchantment Data Interface}
     */
    export type EnchantmentEntityModifiers = `${AttackClassStatsKeys | NormalVectors}Modifier`;
    /**
     * Keys within the
     * {@link Interfaces.EnchantmentData.effects Effects} section of the
     * {@link Interfaces.EnchantmentData Enchantment Data Interface}
     */
    export type EnchantmentEffects = 'nightVision' | 'waterBreathing' | 'invisibility';
    /**
     * Keys within the {@link Interfaces.EnchantmentEffect Enchantment Effects} section
     */
    type EnchantmentItemModifierKeys = `itemModifiers.${EnchantmentItemModifiers}`;
    type EnchantmentEntityModifierKeys = `entityModifiers.${EnchantmentEntityModifiers}`;
    type EnchantmentEffectKeys = `effects.${EnchantmentEffects}.${'requireFullSet' | 'activated'}`;
    /**
     * Location Descriptor that represents a location within the {@link Interfaces.EnchantmentData Enchantment Data Interface}
     */
    export type EnchantmentKeys = EnchantmentItemModifierKeys | EnchantmentEntityModifierKeys | EnchantmentEffectKeys;
}

export namespace Enums {
    /**
     * Damage Types used to identify what type of damage to deal
     * (used in both {@link Classes.Entity `Classes.Entity`}
     * and {@link Classes.Weapon `Classes.Weapon`})
     */
    export enum DamageType {
        Physical,
        Magic,
        Psychological,
    }
    /**
     * Data Type to identify what type of data is being stored
     * (used in {@link Classes.InternalData `Classes.InternalData`})
     */
    export enum DataType {
        Block,
        Material,
        Tool,
        Food,
        Enchantment,
        Effect,
        Entity,
    }
    /**
     * The material rank of the object
     * (used in {@link Classes.Tool `Classes.Tool`})
     */
    export enum MaterialRank {
        Wood,
        Stone,
        Gold,
        Iron,
        Steel,
        Diamond,
        Netherite,
        Indestructium,
    }
    /**
     * Block Data Flags used to add on special pre-defined behaviors within the game
     * (used in {@link Classes.Block `Classes.Block`})
     */
    export enum BlockFlags {
        NoBlast = 1 << 0,
        Gravity = 1 << 1,
        TouchDamage = 1 << 2,
    }
    /**
     * Block type identifier used to determine pre-defined actions, colliders, and physics for the block
     * (used in {@link Classes.Block `Classes.Block`})
     */
    export enum BlockType {
        Solid,
        Liquid,
        Gas,
    }
    /**
     * Tool types used to identify what type of tool an object is
     * (used in {@link Classes.Tool `Classes.Tool`})
     */
    export enum ToolType {
        Axe,
        Hoe,
        Pickaxe,
        Shovel,
    }
    /**
     * Entity Type used to identify what type of entity an object is
     * (used in {@link Classes.Entity `Classes.Entity`})
     */
    export enum EntityType {
        Player,
        HostileMob,
        NeutralMob,
        PassiveMob,
        NPC,
    }
}

export namespace Classes {
    export class Utilities {
        /**
         * Takes a singular array containing four sub-arrays (each with 2 values [percentage, integer]), each
         * mapping out to an object point which will be used as a {@link Interfaces.AttackClassStats DamageStat} object
         * @param data The array-set data to be converted into a valid {@link Interfaces.AttackClassStats DamageStat} object
         */
        static arrayToStats = (data: [number, number][]): Interfaces.AttackClassStats => {
            return _.zipObject(
                ['phys', 'magic', 'psych', 'global'],
                data.map(v => Object.fromEntries([['percentage', v[0]], ['integer', v[1]]]) as { percentage: number; integer: number }),
            ) as unknown as Interfaces.AttackClassStats;
        };
    }
    /**
     * Internal Data Object
     *
     * The base class of almost everything used within the game. Has 3 main properties:
     * `id`: number, `name`: string, and `type`: DataType | undefined
     * @extends EventEmitter
     */
    export class InternalData extends EventEmitter implements Interfaces.InternalFunctions {
        public id: number;
        public type: Types.Nullable<Enums.DataType>;
        private _name: string;
        constructor(data: Interfaces.InternalDataInit) {
            super({ captureRejections: true });
            this.id = data.id;
            this._name = data.name;
            this.type = data.type;
        }

        public get name() {
            return this._name;
        }

        protected set name(d: string) {
            const SyntaxReq = z
                .string()
                .min(4, 'The name value must be between 4 and 32 charactors long')
                .max(32, 'The name value must be between 4 and 32 charactors long')
                .regex(/^[A-Za-z0-9\.\-_ ]+$/gmi, 'The name can only contain alphanumeric charactors and the special charactors \'-\', \'.\', and \'_\'');

            const parsed = SyntaxReq.safeParse(d);
            if (!parsed.success) throw new TypeError(parsed.error.message);
            this._name = d;
        }

        public toJSON = () => Object.fromEntries(Object.entries(this).filter(v => typeof v[1] !== 'function'));
    }
    /**
     * Vector2 Object
     * 
     * A simple 2D vector class used for many different calculations within the game.
    */
    export class Vector2 implements Interfaces.Vector2 {
        public x: number;
        public y: number;
        constructor(data: Interfaces.Vector2Init) {
            this.x = data.x;
            this.y = data.y;
        }
        public get hyp() {
            return Math.sqrt(this.x ** 2 + this.y ** 2);
        }
        public get angle() {
            return Math.atan2(this.y, this.x);
        }
        public normalize() {
            const hyp = this.hyp;
            if (hyp === 0) return new Vector2({ x: 0, y: 0 });
            return new Vector2({ x: this.x / hyp, y: this.y / hyp });
        }
    }
    /**
     * Vector3 Object
     * 
     * A simple 3D vector class used for many different calculations within the game.
    */
    export class Vector3 extends Vector2 implements Interfaces.Vector3 {
        public z: number;
        constructor(data: Interfaces.Vector3Init) {
            super(data);
            this.z = data.z;
        }
    }
    /**
     * Coordinate2D Object
     * 
     * A simple 2D coordinate class used to store positions within a 2D space, and perform in-place calculations.
    */
    export class Coordinate2D implements Interfaces.Coordinate2DFunctions {
        public x: number;
        public y: number;
        constructor(data: Interfaces.Coordinate2DInit) {
            this.x = data.x;
            this.y = data.y;
        }

        public set(data: Partial<Interfaces.Coordinate2DInit>) {
            if (data.x !== undefined) this.x = data.x;
            if (data.y !== undefined) this.y = data.y;
            return this;
        }

        public add(data: Interfaces.Coordinate2DInit) {
            this.x += data.x;
            this.y += data.y;
            return this;
        }

        public subtract(data: Interfaces.Coordinate2DInit) {
            this.x -= data.x;
            this.y -= data.y;
            return this;
        }

        public multiply(scalar: number) {
            this.x *= scalar;
            this.y *= scalar;
            return this;
        }

        public divide(scalar: number) {
            this.x /= scalar;
            this.y /= scalar;
            return this;
        }

        public clone() {
            return new Coordinate2D({ x: this.x, y: this.y });
        }

        public toString() {
            return `(${this.x}, ${this.y})`;
        }
    }
    /**
     * Coordinate3D Object
     * 
     * A simple 3D coordinate class used to store positions within a 3D space, and perform in-place calculations.
    */
    export class Coordinate3D extends Coordinate2D implements Interfaces.Coordinate3DFunctions {
        public z: number;
        constructor(data: Interfaces.Coordinate3DInit) {
            super(data);
            this.z = data.z;
        }

        public override set(data: Partial<Interfaces.Coordinate3DInit>) {
            super.set(data);
            if (data.z !== undefined) this.z = data.z;
            return this;
        }

        public override add(data: Interfaces.Coordinate3DInit) {
            super.add(data);
            this.z += data.z;
            return this;
        }

        public override subtract(data: Interfaces.Coordinate3DInit) {
            super.subtract(data);
            this.z -= data.z;
            return this;
        }

        public override clone() {
            return new Coordinate3D({ x: this.x, y: this.y, z: this.z });
        }

        public override toString() {
            return `(${this.x}, ${this.y}, ${this.z})`;
        }
    }
    /**
     * Enchantment Object
     *
     * The Enchantment class holds information relating to enchantments used and available to the game.
     * This class is used for any and all enchantments within the game.
     *
     * Main property is the `enchantmentData` variable in which contains all of the modifiers that the enchantment
     * provides.
     * @extends InternalData
     */
    export class Enchantment extends InternalData implements Interfaces.EnchantmentFunction {
        public enchantId: number;
        public enchantmentData: Interfaces.EnchantmentData;
        constructor(baseData: Interfaces.BaseInit, enchantmentData: Interfaces.EnchantmentInit) {
            super({ ...baseData, type: Enums.DataType.Enchantment });
            this.enchantId = enchantmentData.id;

            this.enchantmentData = Object.assign({}, Consts.BlankEnchantmentModifiers, enchantmentData.data);
        }

        public adjustModifiers(modifierKey: Types.EnchantmentItemModifierKeys | Types.EnchantmentEntityModifierKeys, newValue: number): ThisType<Enchantment>;
        public adjustModifiers(modifierKey: Types.EnchantmentEffectKeys, newValue: boolean): ThisType<Enchantment>;
        public adjustModifiers(modifierKey: Types.EnchantmentKeys, newValue: number | boolean) {
            // @ts-expect-error This is intentional to allow for chaining
            return (void _.set(this.enchantmentData, modifierKey, newValue)) || this;
        }

        public getModifier(modifierKey: Types.EnchantmentItemModifierKeys | Types.EnchantmentEntityModifierKeys): number;
        public getModifier(modifierKey: Types.EnchantmentEffectKeys): boolean;
        public getModifier(modifierKey: Types.EnchantmentKeys): number | boolean {
            return _.get(this.enchantmentData, modifierKey)!;
        }
    }
    /**
     * Effect Object
     *
     * The Effect class holds information relating to status effects used and available to the game.
     * This class is used for any and all status effects within the game.
     *
     * Main property is the `modifiedStats` variable in which contains all of the modifiers that the
     * status effect provides.
     * @extends InternalData
     */
    export class Effect extends InternalData implements Interfaces.EffectFunctions {
        public modifiedStats: Interfaces.EntityStatsMod;
        constructor(baseData: Interfaces.BaseInit, effectData: Interfaces.EffectInit) {
            super({ ...baseData, type: Enums.DataType.Effect });
            this.modifiedStats = Object.assign({}, effectData.stats, Consts.BlankEntityStatsMod);
        }
    }
    /**
     * Material Object
     *
     * The Material class holds information relating to materials used and available to the game.
     * This class is used for any and all materials within the game.
     * @extends InternalData
     */
    export class Material extends InternalData implements Interfaces.MaterialFunction {
        constructor(baseData: Interfaces.BaseInit, materialData: Interfaces.MaterialInit) {
            super({ ...baseData, type: Enums.DataType.Material });
        }
    }
    /**
     * Game Object
     *
     * The Game class holds information relating to the current game
     * @extends InternalData
     */
    export class Game implements Interfaces.GameFunction {
        public seed: number;
        public name: string;
        public lastSaved: Date;
        public difficulty: 'peaceful' | 'easy' | 'normal' | 'hard';
        public currentVersion: `v${number}.${number}.${number}`
        public experimentalFeatures: boolean;
        public resourcePacks: Set<string>;
        public behaviorPacks: Set<string>;
        public entities: Map<number, Entity>;
        public blocks: Map<Coordinate3D, Block>;
        constructor(_gameData?: Interfaces.GameInit) {
            this.seed = randomInt(0, 2147483647);
            this.name = 'New World';
            this.lastSaved = new Date();
            this.difficulty = 'normal';
            this.currentVersion = 'v1.0.0';
            this.experimentalFeatures = false;
            this.resourcePacks = new Set();
            this.behaviorPacks = new Set();
            this.entities = new Map();
            this.blocks = new Map();
        }

        private async getKeys() {
            const encryptionKey = await importJWK(
                JSON.parse(readFileSync(join(import.meta.dirname, '../keys/crypt.json')).toString()),
                'RS512',
            );
            const signingKey = await importJWK(
                JSON.parse(readFileSync(join(import.meta.dirname, '../keys/sign.json')).toString()),
                'ES512',
            )
            return { encryptionKey, signingKey };
        }

        get saveData() {
            const saveData = {
                seed: this.seed,
                name: this.name,
                lastSaved: this.lastSaved.toISOString(),
                difficulty: this.difficulty,
                currentVersion: this.currentVersion,
                experimentalFeatures: this.experimentalFeatures,
                resourcePacks: Array.from(this.resourcePacks),
                behaviorPacks: Array.from(this.behaviorPacks),
                entities: Array.from(this.entities.values()).map(v => v.toJSON()),
                blocks: Array.from(this.blocks.entries()).map(v => [v[0].toString(), v[1].toJSON()]),
            };
            const SaveBuffer = Buffer.alloc(0);
            const HeaderBuffer = Buffer.alloc(16, 0xFF);
            HeaderBuffer.write('bensave\xFA1', 0); // Denotes name and versions
            HeaderBuffer.write(`\xF0`, HeaderBuffer.length - 1); // Denotes end of header. More data will be added later for the full header
            SaveBuffer.write(JSON.stringify(saveData), SaveBuffer.length, 'utf-8');
            const saveBuffer = Buffer.concat([
                HeaderBuffer,
                Buffer.from(JSON.stringify(saveData)), 
                createHash('sha256').update(JSON.stringify(saveData)).digest()
            ]);
            return new Promise(async (ok: (value: GeneralJWS) => void, err) => {
                const { encryptionKey, signingKey } = await this.getKeys();
                try {
                    const encryptedSave = await new GeneralEncrypt(saveBuffer)
                        .setProtectedHeader({ alg: 'RS512', enc: 'RS512' })
                        .addRecipient(encryptionKey)
                        .encrypt();
                    const signedSave = await new GeneralSign(Buffer.from(encryptedSave.aad + '.' + encryptedSave.iv + '.' + encryptedSave.ciphertext + '.' + encryptedSave.tag))
                        .addSignature(signingKey)
                        .sign();
                    ok(signedSave);
                } catch (e) {
                    err(e);
                }
            })
        }
    }
    /**
     * Entity Object
     *
     * The Entity class holds information relating to entities used and available to the game.
     * This class is used for any and all entities (including players) within the game.
     *
     * The class has many values defined in the {@link Interfaces.Entity Entity Interface}
     * @extends InternalData
     */
    export class Entity extends InternalData implements Interfaces.EntityFunction {
        hp: Interfaces.ItemBaseRemainingStats;
        def: Interfaces.AttackClassStats;
        str: Interfaces.AttackClassStats;
        vol: Set<number>;
        inventory: StorageContainer;
        effects: Map<number, Effect>;
        entityType: Enums.EntityType;
        constructor(baseData: Interfaces.BaseInit, entityData: Interfaces.EntityInit) {
            super({ ...baseData, type: Enums.DataType.Entity });
            this.hp = {
                base: entityData.hp,
                remaining: entityData.hp,
            };
            this.def = entityData.def;
            this.str = entityData.str;
            this.vol = new Set().add(0).add(0) as Set<number>;
            this.inventory = new StorageContainer({ slots: 0 });
            this.effects = new Map() as Map<number, Effect>;
            this.entityType = entityData.type;
        }

        public takeDamage(damage: Interfaces.DamageData<Enums.DamageType>) {
            switch (damage.type) {
                case Enums.DamageType.Physical: break;
                case Enums.DamageType.Magic: break;
                case Enums.DamageType.Psychological: break;
                default: break;
            }
            return this;
        }

        public getBaseHealth(): number {
            return this.hp.base;
        }

        public addBaseHealth(amount: number) {
            if (amount < 0) throw new TypeError('Amount must be a positive integer');
            this.hp.base += amount;
            return this;
        }

        public removeBaseHealth(amount: number) {
            const SyntaxReq = z
                .number()
                .min(0, 'Amount must be a positive integer');

            const parsed = SyntaxReq.safeParse(amount);
            if (!parsed.success) throw new TypeError(parsed.error.message);
            this.hp.base = _.clamp(this.hp.base - amount, 0, this.hp.base);
            this.hp.remaining = _.clamp(this.hp.remaining, 0, this.hp.base);
            return this;
        }

        public getRemainingHealth(): number {
            return this.hp.remaining;
        }

        public addRemainingHealth(amount: number) {
            const SyntaxReq = z
                .number()
                .min(0, 'Amount must be a positive integer');

            const parsed = SyntaxReq.safeParse(amount);
            if (!parsed.success) throw new TypeError(parsed.error.message);
            this.hp.remaining = _.clamp(this.hp.remaining + amount, 0, this.hp.base);
            return this;
        }

        public removeRemainingHealth(amount: number) {
            const SyntaxReq = z
                .number()
                .min(0, 'Amount must be a positive integer');

            const parsed = SyntaxReq.safeParse(amount);
            if (!parsed.success) throw new TypeError(parsed.error.message);
            this.hp.remaining = _.clamp(this.hp.remaining - amount, 0, this.hp.base);
            return this;
        }

        public getEffects(): Map<number, Effect> {
            return this.effects;
        }

        public addEffect(effect: Effect) {
            this.effects.set(this.effects.size, effect);
            return this;
        }

        public removeEffect(id: number) {
            this.effects.delete(id);
            return this;
        }

        public clearEffects() {
            this.effects.clear();
            return this;
        }
    }
    /**
     * Tool Object
     *
     * The Tool class holds information relating to Tools used and available to the game.
     * This class is used for any and all Tools within the game.
     * @extends InternalData
    */
    export class Tool extends InternalData implements Interfaces.ToolFunction {
        toolType: Enums.ToolType;
        rank: Enums.MaterialRank;
        durability: Interfaces.ItemBaseRemainingStats;
        enchantments: Map<number, Enchantment>;
        constructor(baseData: Interfaces.BaseInit, toolData: Interfaces.ToolInit) {
            super({ ...baseData, type: Enums.DataType.Tool });
            this.toolType = toolData.toolType;
            this.rank = toolData.rank;
            this.durability = {
                base: Consts.DurabilityMap.get(toolData.rank)!,
                remaining: Consts.DurabilityMap.get(toolData.rank)!,
            };
            this.enchantments = toolData.enchantments;
        }
    }
    /**
     * Weapon Object
     *
     * The Weapon class holds information relating to Weapons used and available to the game.
     * This class is used for any and all Weapons within the game.
     * @extends Tool
     */
    export class Weapon extends Tool implements Interfaces.WeaponFunction {
        constructor(baseData: Interfaces.BaseInit, toolData: Interfaces.ToolInit, weaponData: Interfaces.WeaponInit) {
            super(baseData, toolData);
        }
    }
    /**
     * Food Object
     *
     * The Food class holds information relating to Foods used and available to the game.
     * This class is used for any and all Foods within the game.
     * @extends InternalData
     */
    export class Food extends InternalData implements Interfaces.FoodFunctions {
        constructor(baseData: Interfaces.BaseInit, foodData: Interfaces.FoodInit) {
            super({ ...baseData, type: Enums.DataType.Food });
        }
    }
    /**
     * Block Object
     *
     * The Block class holds information relating to Blocks used and available to the game.
     * This class is used for any and all Blocks within the game.
     * @extends InternalData
     */
    export class Block extends InternalData implements Interfaces.BlockFunctions {
        public sprite: string;
        public blockType: Enums.BlockType;
        public flags: number;
        constructor(baseData: Interfaces.BaseInit, blockData: Interfaces.BlockInit) {
            super({ ...baseData, type: Enums.DataType.Block });
            this.sprite = blockData.sprite;
            this.blockType = blockData.type;
            this.flags = _.sum(blockData.flags);
        }
    }
    /**
     * Storage Slot Object
     *
     * The Storage Slot class holds information relating to Storage Slots used and available to the game.
     * This class is used for any and all Storage Slots within the game.
     *
     * Main property is the `object` variable in which contains the stored item data
     * @extends InternalData
     */
    export class StorageSlot implements Interfaces.StorageSlotFunctions {
        public slotId: number;
        public object: Block | Food | Weapon | Tool | Interfaces.UndefinedObject;
        constructor(storageSlotData: Interfaces.StorageSlotInit) {
            this.slotId = storageSlotData.id;
            this.object = _.defaultTo(storageSlotData.obj, Consts.UndefinedObject);
        }
    }
    /**
     * Storage Container Object
     *
     * The Storage Container class holds information relating to Storage Containers used and available to the game.
     * This class is used for any and all Storage Containers within the game.
     *
     * This class is composed of sub-{@link StorageSlot Storage Slots} which contain all of the stored item data
     * @extends InternalData
    */
    export class StorageContainer implements Interfaces.StorageContainerFunctions {
        public availableSlots: number;
        public slots: Map<number, StorageSlot>;
        constructor(storageContainerData: Interfaces.StorageContainerInit) {
            this.availableSlots = storageContainerData.slots;
            this.slots = new Map(
                new Array(this.availableSlots)
                    .map((_, i) => [i, new StorageSlot({ id: i, obj: undefined })]),
            );
        }
    }
}

export namespace Consts {
    /**
     * Durability Map
     *
     * Contains all of the durability values for the material ranks
     * (used in {@link Classes.Tool `Classes.Tool`})
     */
    export const DurabilityMap
        = new Map()
            .set(Enums.MaterialRank.Wood, 59)
            .set(Enums.MaterialRank.Stone, 131)
            .set(Enums.MaterialRank.Gold, 32) // ? This hurts me :c
            .set(Enums.MaterialRank.Iron, 250)
            .set(Enums.MaterialRank.Steel, 752)
            .set(Enums.MaterialRank.Diamond, 1561)
            .set(Enums.MaterialRank.Netherite, 2031)
            .set(Enums.MaterialRank.Indestructium, Infinity) as Map<Enums.MaterialRank, number>;
    /** Base Effect Object
     *
     * The base effect object used to initialize all of the effects within the
     * {@link Interfaces.EnchantmentData Enchantment Data Interface}
     */
    const baseEffect: Interfaces.EnchantmentEffect = {
        requireFullSet: true,
        activated: false,
    };
    /**
     * Blank/default version of the
     * {@link Interfaces.EnchantmentData Enchantment Data Interface}
     */
    export const BlankEnchantmentModifiers: Interfaces.EnchantmentData = {
        itemModifiers: {
            efficiencyModifier: 1,
            physicalAttackModifier: 1,
            magicAttackModifier: 1,
            psychologicalAttackModifier: 1,
            globalAttackModifier: 1,
            baseAttackModifier: 1,
            durabilityModifier: 1,
        },
        entityModifiers: {
            physicalAttackModifier: 1,
            magicAttackModifier: 1,
            psychologicalAttackModifier: 1,
            globalAttackModifier: 1,
            baseAttackModifier: 1,
            physicalDefenseModifier: 1,
            magicDefenseModifier: 1,
            psychologicalDefenseModifier: 1,
            globalDefenseModifier: 1,
            baseDefenseModifier: 1,
            healthModifier: 1,
            regenerationModifier: 1,
            speedModifier: 1,
            waterMovementModifier: 1,
        },
        effects: {
            nightVision: baseEffect,
            waterBreathing: baseEffect,
            invisibility: baseEffect,
        },
    };
    /**
     * Blank/default version of the {@link Interfaces.EntityStatsMod Entity Stats Mod Interface}
     */
    const emptyStatusModification: Interfaces.StatusModification = { integer: 0, percentage: 0 };
    /**
     * Blank/default version of the {@link Interfaces.EntityStatsMod Entity Stats Mod Interface}
     */
    export const BlankEntityStatsMod: Interfaces.EntityStatsMod = {
        health: emptyStatusModification,
        physDamage: emptyStatusModification,
        magicDamage: emptyStatusModification,
        psychDamage: emptyStatusModification,
        globalDamage: emptyStatusModification,
        physDefense: emptyStatusModification,
        magicDefense: emptyStatusModification,
        psychDefense: emptyStatusModification,
        globalDefense: emptyStatusModification,
        speed: emptyStatusModification,
        mana: emptyStatusModification,
        intelligence: emptyStatusModification,
        luck: emptyStatusModification,
    };
    /**
     * The undefined object
     */
    export const UndefinedObject: Interfaces.UndefinedObject = {
        name: '',
        type: undefined,
        toJSON: () => ({ id: 1, name: '', type: undefined }),
    };
}

namespace Exports {
    export const Class = Classes;
    export const Enum = Enums;
    export const Const = Consts;
}

export default Exports;
export type { Interfaces, Types };
