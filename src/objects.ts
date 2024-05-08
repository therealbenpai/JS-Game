/// <reference types="node" />
import { EventEmitter } from 'node:events';
export declare namespace Interfaces {
	/**
	 * Internal data within the
	 * {@link Classes.InternalData `Classes.InternalData`} class
	 */
	export interface InternalData {
		/** 
		 * @description
		 * The internal ID of the object 
		 */
		id: number
		/**
		 * @description
		 * The human-readable display name of the object
		 */
		name: string
		/**
		 * @description
		 * The data type of the object
		 */
		type: Enums.DataType | undefined
	}
	/**
	 * Extended version of the {@link InternalData Internal Data Interface}
	 * 
	 * Included all of the functions that the {@link Classes.InternalData `Classes.InternalData`} class contains
	 */
	export interface InternalFunctions extends InternalData {
		/**
		 * @description
		 * Returns a JSON Object representation of the internal data within the class
		 */
		toJSON: () => Record<string, any>
	}
	/**
	 * Initialization data used to initialize the
	 * {@link Classes.InternalData `Classes.InternalData`} class
	 */
	export interface InternalDataInit {
		/** 
		 * @description
		 * The internal ID of the object 
		 */
		id: number
		/**
		 * @description
		 * The human-readable display name of the object
		 */
		name: string
		/**
		 * @description
		 * The data type of the object
		 */
		type: Enums.DataType | undefined
	}
	/**
	 * Base initialization interface used when initializing a class which extends the
	 * {@link Classes.InternalData `Classes.InternalData`} class.
	 */
	export interface BaseInit extends Omit<InternalDataInit, 'type'> {

	}
	/**
	 * Keys found in the objects used in the
	 * {@link EnchantmentData.effects Effects} object within the
	 * {@link EnchantmentData Enchantment Data Interface}
	 */
	export interface EnchantmentEffect {
		/**
		 * @description
		 * Determines if the entity requires the full armour set to receive the specified effect
		 */
		requireFullSet: boolean
		/**
		 * @description
		 * Determines if the armor piece provides the specified effect
		 */
		activated: boolean
	}
	/**
	 * Full Enchantment Data used within the
	 * {@link Classes.Enchantment `Classes.Enchantment`} class
	 */
	export interface EnchantmentData {
		/**
		 * @description
		 * Stats Modifiers for items (Tools, Weapons, Food, etc.)
		 */
		itemModifiers: {
			/**
			 * @description
			 * Base Efficiency Modifier of a tool (default: `1`)
			 */
			efficiencyModifier: number | undefined
			/**
			 * @description
			 * Physical Attack Modifier of a tool (default: `1`)
			 */
			physicalAttackModifier: number | undefined
			/**
			 * @description
			 * Magical Attack Modifier of a tool (default: `1`)
			 */
			magicAttackModifier: number | undefined
			/**
			 * @description
			 * Psychological Attack Modifier of a tool (default: `1`)
			 */
			psychologicalAttackModifier: number | undefined
			/**
			 * @description
			 * Global Attack Modifier of a tool (default: `1`)
			 */
			globalAttackModifier: number | undefined
			/**
			 * @description
			 * Base Attack Modifier of a tool (default: `1`)
			 */
			baseAttackModifier: number | undefined
			/**
			 * @description
			 * Durability Modifier of a tool (default: `1`)
			 */
			durabilityModifier: number | undefined
		} | undefined
		/**
		 * @description
		 * Stats Modifiers for Entities (Armour, Food Effects, etc.)
		 */
		entityModifiers: {
			/**
			 * @description
			 * Physical Attack Modifier of an entity (default: `1`)
			 */
			physicalAttackModifier: number | undefined
			/**
			 * @description
			 * Magical Attack Modifier of an entity (default: `1`)
			 */
			magicAttackModifier: number | undefined
			/**
			 * @description
			 * Psychological Attack Modifier of an entity (default: `1`)
			 */
			psychologicalAttackModifier: number | undefined
			/**
			 * @description
			 * Global Attack Modifier of an entity (default: `1`)
			 */
			globalAttackModifier: number | undefined
			/**
			 * @description
			 * Base Attack Modifier of an entity (default: `1`)
			 */
			baseAttackModifier: number | undefined
			/**
			 * @description
			 * Physical Defense Modifier of an entity (default: `1`)
			 */
			physicalDefenseModifier: number | undefined
			/**
			 * @description
			 * Magical Defense Modifier of an entity (default: `1`)
			 */
			magicDefenseModifier: number | undefined
			/**
			 * @description
			 * Psychological Defense Modifier of an entity (default: `1`)
			 */
			psychologicalDefenseModifier: number | undefined
			/**
			 * @description
			 * Global Defense Modifier of an entity (default: `1`)
			 */
			globalDefenseModifier: number | undefined
			/**
			 * @description
			 * Base Defense Modifier of an entity (default: `1`)
			 */
			baseDefenseModifier: number | undefined
			/**
			 * @description
			 * Base Health Modifier of an entity (default: `1`)
			 */
			healthModifier: number | undefined
			/**
			 * @description
			 * Base Regeneration Modifier of an entity (default: `1`)
			 */
			regenerationModifier: number | undefined
			/**
			 * @description
			 * Base Speed Modifier of an entity (default: `1`)
			 */
			speedModifier: number | undefined
			/**
			 * @description
			 * Base Water-based Movement Modifier of an entity (default: `1`)
			 */
			waterMovementModifier: number | undefined
		} | undefined
		/**
		 * @description
		 * Effects for entities wearing enchanted items (Armour only)
		 */
		effects: {
			/**
			 * @description
			 * Configurations on if the entity should receive night vision if they have the armour equipped
			 * (default: {requireFullSet: true, activated: false})
			 * */
			nightVision: EnchantmentEffect | undefined
			/**
			 * @description
			 * Configurations on if the entity should receive water breathing if they have the armour equipped
			 * (default: {requireFullSet: true, activated: false})
			 * */
			waterBreathing: EnchantmentEffect | undefined
			/**
			 * @description
			 * Configurations on if the entity should receive invisibility if they have the armour equipped
			 * (default: {requireFullSet: true, activated: false})
			 * */
			invisibility: EnchantmentEffect | undefined
		} | undefined
	}
	/**
	 * Internal data within the {@link Classes.Enchantment `Classes.Enchantment`} class
	 */
	export interface Enchantment extends InternalData {
		/**
		 * @description
		 * Identifier of the enchantment
		 */
		enchantId: number;
		/**
		 * @description
		 * All of the modifiers that the enchantment provides
		 */
		enchantmentData: EnchantmentData;
	}
	/**
	 * Extended version of the {@link Enchantment Enchantment Interface}
	 * 
	 * Included all of the functions that the {@link Classes.Enchantment `Classes.Enchantment`} class contains
	 */
	export interface EnchantmentFunction extends InternalFunctions, Enchantment {
		/**
		 * @param modifierKey The key of which identifies the enchantment data section to alter
		 * @param newValue The new value of the specified data point
		 * @description
		 * Adjusts a data point of the enchantment
		 */
		adjustModifiers(modifierKey: Types.EnchantmentKeys, newValue: number | boolean): this
		/**
		 * @param modifierKey The key of which identifies the enchantment data section to retrieve
		 * @description
		 * Retrieves a data point from the enchantment
		 */
		getModifier(modifierKey: Types.EnchantmentKeys): number | boolean
	}
	/**
	 * Initialization data used to initialize the {@link Classes.Enchantment `Classes.Enchantment`} class
	 */
	export interface EnchantmentInit {
		/**
		 * @description
		 * The identifier for the enchantment
		 */
		id: number;
		/**
		 * @description
		 * All of the modifiers that the enchantment provides
		 */
		data: EnchantmentData;
	}
	/**
	 * Layout of entity/item stats
	 */
	export interface StatusModification {
		/**
		 * @description
		 * The percentage modifier (`x.yz` ==> `xyz`%)
		 */
		percentage: number
		/**
		 * @description
		 * The integer modifier (`x` ==> `+ x`)
		 */
		integer: number
	}
	/**
	 * Full data dealing with entity stats modification
	 */
	export interface EntityStatsMod {
		/**
		 * @description
		 * Health Modifier Data
		 */
		health: StatusModification
		/**
		 * @description
		 * Physical Damage Modifier Data
		 */
		physDamage: StatusModification
		/**
		 * @description
		 * Magical Damage Modifier Data
		 */
		magicDamage: StatusModification
		/**
		 * @description
		 * Psychological Damage Modifier Data
		 */
		psychDamage: StatusModification
		/**
		 * @description
		 * Global Damage Modifier Data
		 */
		globalDamage: StatusModification
		/**
		 * @description
		 * Physical Defense Modifier Data
		 */
		physDefense: StatusModification
		/**
		 * @description
		 * Magical Defense Modifier Data
		 */
		magicDefense: StatusModification
		/**
		 * @description
		 * Psychological Defense Modifier Data
		 */
		psychDefense: StatusModification
		/**
		 * @description
		 * Global Defense Modifier Data
		 */
		globalDefense: StatusModification
		/**
		 * @description
		 * Speed Modifier Data
		 */
		speed: StatusModification
		/**
		 * @description
		 * Mana Modifier Data
		 */
		mana: StatusModification
		/**
		 * @description
		 * Intelligence Modifier Data
		 */
		intelligence: StatusModification
		/**
		 * @description
		 * Luck Modifier Data
		 */
		luck: StatusModification
	}
	/**
	 * Contains data relating to the damage dealt to an entity
	 */
	export interface DamageData {
		/**
		 * @description
		 * Amount of damage dealt to the entity
		 */
		amm: number
		/**
		 * @description
		 * Type of damage taken
		 */
		type: Enums.DamageType
	}
	/**
	 * Internal data within the {@link Classes.Effect `Classes.Effect`} class
	 */
	export interface Effect extends InternalData {
		/**
		 * @description
		 * The Stats modifier data that the effect provides
		 */
		modifiedStats: EntityStatsMod
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
		 * @description
		 * The Stats modifier data that the effect provides
		 */
		stats: EntityStatsMod
	}
	/**
	 * Internal data within the {@link Classes.Material `Classes.Material`} class
	 */
	export interface Material extends InternalData {

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
	 * Internal data within the {@link Classes.Game `Classes.Game`} class
	 */
	export interface Game {

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
	 * Contains data relating to the Attack Damage that an entity deals
	 */
	export interface AttackClassStats {
		/**
		 * @description
		 * Physical Damage Modifier Data
		 */
		phys: StatusModification
		/**
		 * @description
		 * Magical Damage Modifier Data
		 */
		magic: StatusModification
		/**
		 * @description
		 * Psychological Damage Modifier Data
		 */
		psych: StatusModification
		/**
		 * @description
		 * Global Damage Modifier Data
		 */
		global: StatusModification
	}
	/**
	 * Interface for data points which have a `base` and a `remaining` value
	 */
	export interface ItemBaseRemainingStats {
		/**
		 * @description
		 * The base amount
		 */
		base: number
		/**
		 * @description
		 * The remaining amount
		 */
		remaining: number
	}
	/**
	 * Internal data within the {@link Classes.Entity `Classes.Entity`} class
	 */
	export interface Entity {
		/**
		 * @description
		 * The health points that the entity has
		 */
		hp: ItemBaseRemainingStats;
		/**
		 * @description
		 * The defense stats that the entity has
		 */
		def: AttackClassStats;
		/**
		 * @description
		 * The strength stats that the entity has
		 */
		str: AttackClassStats;
		/**
		 * @description
		 * The movement velocity that the entity has
		 */
		vol: Set<number>;
		/**
		 * @description
		 * The inventory for the entity
		 */
		inventory: Classes.StorageContainer;
		/**
		 * @description
		 * The effects that the entity has
		 */
		effects: Map<number, Classes.Effect>
	}
	/**
	 * Extended version of the {@link Entity Entity Interface}
	 * 
	 * Included all of the functions that the {@link Classes.Entity `Classes.Entity`} class contains
	 */
	export interface EntityFunction extends InternalFunctions, Entity {
		/**
		 * @param damage Data for the damage to deal
		 * @description
		 * Deal damage to the target entity using a strict amount and damage type
		 */
		takeDamage(damage: DamageData): this
		/**
		 * @description
		 * Retrieves the base health stat
		 */
		getBaseHealth(): number
		/**
		 * @param amount Data for the HP to add
		 * @description
		 * Adds a set amount to the base health
		 */
		addBaseHealth(amount: number): this
		/**
		 * @param amount Data for the HP to remove
		 * @description
		 * Removes a set amount from the base health
		 */
		removeBaseHealth(amount: number): this
		/**
		 * @description
		 * Retrieves the remaining health stat
		 */
		getRemainingHealth(): number
		/**
		 * @param amount Data for the HP to add
		 * @description
		 * Adds a set amount to the remaining health (capped at the base value)
		 */
		addRemainingHealth(amount: number): this
		/**
		 * @param amount Data for the HP to remove
		 * @description
		 * Removes a set amount from the remaining health
		 */
		removeRemainingHealth(amount: number): this
		/**
		 * @description
		 * Retrieves the active effects
		 */
		getEffects(): Map<number, Classes.Effect>;
		/**
		 * @param effect The effect to add to the entity
		 * @description
		 * Adds an effect to the entity
		 */
		addEffect(effect: Classes.Effect): this
		/**
		 * @param id The ID of the effect to remove
		 * @description
		 * Removes an effect to the entity
		 */
		removeEffect(id: number): this
		/**
		 * @description
		 * Clears all of the effects from the entity
		 */
		clearEffects(): this
	}
	/**
	 * Initialization data used to initialize the {@link Classes.Entity `Classes.Entity`} class
	 */
	export interface EntityInit {
		/**
		 * @description
		 * The health points that the entity has
		 */
		hp: number;
		/**
		 * @description
		 * The defense stats that the entity has
		 */
		def: AttackClassStats;
		/**
		 * @description
		 * The strength stats that the entity has
		 */
		str: AttackClassStats;
		/**
		 * @description
		 * The type of entity that the object is
		 */
		type: Enums.EntityType;
	}
	/**
	 * Internal data within the {@link Classes.Tool `Classes.Tool`} class
	 */
	export interface Tool extends InternalData {
		/**
		 * @description
		 * The tool type
		 */
		toolType: Enums.ToolType
		/**
		 * @description
		 * The material rank of the tool
		 */
		rank: Enums.MaterialRank
		/**
		 * @description
		 * The durability stats for the tool
		 */
		durability: ItemBaseRemainingStats
		/**
		 * @description
		 * The map contains all the enchantments on the tool
		 */
		enchantments: Map<number, Classes.Enchantment>
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
		 * @description
		 * The tool type
		 */
		toolType: Enums.ToolType
		/**
		 * @description
		 * The material rank of the tool
		 */
		rank: Enums.MaterialRank
		/**
		 * @description
		 * The map contains all the enchantments on the tool
		 */
		enchantments: Map<number, Classes.Enchantment>
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
	/**
	 * Internal data within the {@link Classes.Food `Classes.Food`} class
	 */
	export interface Food extends InternalData {

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
	 * Internal data within the {@link Classes.Block `Classes.Block`} class
	 */
	export interface Block extends InternalData {
		/**
		 * @description
		 * The path to the sprite (excluding the `/assets` dir)
		 */
		sprite: string
		/**
		 * @description
		 * The block type
		 */
		blockType: Enums.BlockType
		/**
		 * @description
		 * The flags for the block
		 */
		flags: Enums.BlockFlags | 0
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
		 * @description
		 * The path to the sprite (excluding the `/assets` dir)
		 */
		sprite: string
		/**
		 * @description
		 * The block type
		 */
		type: Enums.BlockType
		/**
		 * @description
		 * The flags for the block
		 */
		flags: Enums.BlockFlags[] | 0
	}
	/**
	 * Internal data within the {@link Classes.StorageSlot `Classes.StorageSlot`} class
	 */
	export interface StorageSlot {
		/**
		 * @description
		 * The ID of the slot
		 */
		slotId: number
		/**
		 * @description
		 * The object data for the slot
		 */
		object: Classes.Block | Classes.Food | Classes.Weapon | Classes.Tool | UndefinedObject
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
		 * @description
		 * The ID of the slot
		 */
		id: number
		/**
		 * @description
		 * The object data for the slot
		 */
		obj: Classes.Block | Classes.Food | Classes.Weapon | Classes.Tool | undefined
	}
	/**
	 * Internal data within the {@link Classes.StorageContainer `Classes.StorageContainer`} class
	 */
	export interface StorageContainer {
		/**
		 * @description
		 * The amount of slots available
		 */
		availableSlots: number
		/**
		 * @description
		 * A map containing the Storage Slots
		 */
		slots: Map<number, Classes.StorageSlot>
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
		 * @description
		 * The amount of available slots
		 */
		slots: number
	}
	/**
	 * The undefined object class type
	 */
	export interface UndefinedObject {
		name: string,
		type: undefined,
		toJSON: () => ({ id: 1, name: "", type: undefined })
	}
}
export declare namespace Types {
	/**
	 * Keys within the
	 * {@link Interfaces.EnchantmentData.itemModifiers Item Modifiers} section of the
	 * {@link Interfaces.EnchantmentData Enchantment Data Interface}
	 */
	export type EnchantmentItemModifiers =
		"physicalAttackModifier" | "magicAttackModifier" |
		"psychologicalAttackModifier" | "globalAttackModifier" |
		"baseAttackModifier" | "durabilityModifier";
	/**
	 * Keys within the
	 * {@link Interfaces.EnchantmentData.entityModifiers Entity Modifiers} section of the
	 * {@link Interfaces.EnchantmentData Enchantment Data Interface}
	 */
	export type EnchantmentEntityModifiers =
		"physicalAttackModifier" | "magicAttackModifier" |
		"psychologicalAttackModifier" | "globalAttackModifier" |
		"baseAttackModifier" | "physicalDefenseModifier" |
		"magicDefenseModifier" | "psychologicalDefenseModifier" |
		"globalDefenseModifier" | "baseDefenseModifier" |
		"healthModifier" | "regenerationModifier" |
		"speedModifier" | "waterMovementModifier";
	/**
	 * Keys within the
	 * {@link Interfaces.EnchantmentData.effects Effects} section of the
	 * {@link Interfaces.EnchantmentData Enchantment Data Interface}
	 */
	export type EnchantmentEffects =
		"nightVision" | "waterBreathing" | "invisibility";
	/**
	 * Keys within the {@link Interfaces.EnchantmentEffect Enchantment Effects} section
	 */
	export type EnchantmentEffectOptions =
		"requireFullSet" | "activated";
	/**
	 * Location Descriptor that represents a location within the {@link Interfaces.EnchantmentData Enchantment Data Interface}
	 */
	export type EnchantmentKeys =
		`itemModifiers.${EnchantmentItemModifiers}` |
		`entityModifiers.${EnchantmentEntityModifiers}` |
		`effects.${EnchantmentEffects}.${EnchantmentEffectOptions}`;
	/**
	 * Split-up Array-mapped version of the {@link Types.EnchantmentKeys Enchantment Keys Type}
	 */
	export type EnchantmentKeyLocationArray =
		["itemModifiers", EnchantmentItemModifiers] |
		["entityModifiers", EnchantmentEntityModifiers] |
		["effects", EnchantmentEffects, EnchantmentEffectOptions];
}
export declare namespace Enums {
	/**
	 * Damage Types used to identify what type of damage to deal
	 * (used in both {@link Classes.Entity `Classes.Entity`}
	 * and {@link Classes.Weapon `Classes.Weapon`})
	 */
	export enum DamageType {
		/** Physical Damage */
		Physical,
		/** Magical Damage */
		Magic,
		/** Psychological Damage */
		Psychological
	}
	/**
	 * Data Type to identify what type of data is being stored
	 * (used in {@link Classes.InternalData `Classes.InternalData`})
	 */
	export enum DataType {
		/** Block Data */
		Block,
		/** Material Data */
		Material,
		/** Tool Data */
		Tool,
		/** Food Data */
		Food,
		/** Enchantment Data */
		Enchantment,
		/** Effect Data */
		Effect,
		/** Entity Data */
		Entity
	}
	/**
	 * The material rank of the object
	 * (used in {@link Classes.Tool `Classes.Tool`})
	 */
	export enum MaterialRank {
		/**
		 * @description
		 * Wooden-ranking Material
		 */
		Wood,
		/**
		 * @description
		 * Stone-ranking Material
		 */
		Stone,
		/**
        * @description
        * Ranking-ranking Material
        */
		Gold,
		/**
		 * @description
		 * Iron-ranking Material
		 */
		Iron,
		/**
		 * @description
		 * Steel-ranking Material
		 */
		Steel,
		/**
		 * @description
		 * Diamond-ranking Material
		 */
		Diamond,
		/**
		 * @description
		 * Netherite-ranking Material
		 */
		Netherite,
		/**
		 * @description
		 * Indestructium-ranking Material
		 */
		Indestructium,
	}
	/**
	 * Block Data Flags used to add on special pre-defined behaviors within the game
	 * (used in {@link Classes.Block `Classes.Block`})
	 */
	export enum BlockFlags {
		/**
		 * @description
		 * Immune to explosives
		 */
		NoBlast = 1 << 0,
		/**
		 * @description
		 * Affected by gravity
		 */
		Gravity = 1 << 1,
		/**
		 * @description
		 * Entities take damage upon contact
		 */
		TouchDamage = 1 << 2,
	}
	/**
	 * Block type identifier used to determine pre-defined actions, colliders, and physics for the block
	 * (used in {@link Classes.Block `Classes.Block`})
	 */
	export enum BlockType {
		/**
		 * @description
		 * Solid block
		 */
		Solid,
		/**
		 * @description
		 * Liquid block
		 */
		Liquid,
		/**
		 * @description
		 * Gaseous Block
		 */
		Gas,
	}
	/**
	 * Tool types used to identify what type of tool an object is
	 * (used in {@link Classes.Tool `Classes.Tool`})
	 */
	export enum ToolType {
		/**
		 * @description
		 * Axe Tool
		 */
		Axe,
		/**
		 * @description
		 * Hoe Tool
		 */
		Hoe,
		/**
		 * @description
		 * Pickaxe Tool
		 */
		Pickaxe,
		/**
		 * @description
		 * Shovel Tool
		 */
		Shovel
	}
	/**
	 * Entity Type used to identify what type of entity an object is
	 * (used in {@link Classes.Entity `Classes.Entity`})
	 */
	export enum EntityType {
		/**
		 * @description
		 * Player Entity
		 */
		Player,
		/**
		 * @description
		 * Hostile Mob Entity
		 */
		HostileMob,
		/**
		 * @description
		 * Neutral Mob Entity
		 */
		NeutralMob,
		/**
		 * @description
		 * Passive Mob Entity
		 */
		PassiveMob,
		/**
		 * @description
		 * NPC Entity
		 */
		NPC
	}
}
export namespace Classes {
	/**
	 * Formatters Object
	 * 
	 * The Formatters class contains utility formatting functions that can assist in development for the application.
	 */
	export class Formatters {
		/**
		 * Takes a singular array containing four sub-arrays (each with 2 values [percentage, integer]), each
		 * mapping out to an object point which will be used as a {@link Interfaces.AttackClassStats DamageStat} object
		 * @param data The array-set data to be converted into a valid {@link Interfaces.AttackClassStats DamageStat} object
		 */
		static arrayToStats = (data: [[number, number], [number, number], [number, number], [number, number]]) => ({
			phys: { percentage: data[0][0], integer: data[0][1] },
			magic: { percentage: data[1][0], integer: data[1][1] },
			psych: { percentage: data[2][0], integer: data[2][1] },
			global: { percentage: data[3][0], integer: data[3][1] },
		})
	}
	/**
	 * Internal Data Object
	 * 
	 * The base class of almost everything used within the game. Has 3 main properties:
	 * `id`: number, `name`: string, and `type`: DataType | undefined
	 * @extends EventEmitter
	 */
	export class InternalData extends EventEmitter implements Interfaces.InternalFunctions {
		id: number;
		name: string;
		type: Enums.DataType | undefined;
		constructor(data: Interfaces.InternalDataInit) {
			super({ captureRejections: true })
			this.id = data.id
			this.name = data.name
			this.type = data.type
			Object.defineProperty(this, 'name', {
				set: d => {
					if (typeof d !== "string") throw new TypeError("The name must be a string")
					if (/[^A-Za-z0-9\.\-_ ]/gmi.test(d))
						throw new TypeError("The name can only contain alphanumeric charactors and the special charactors '-', '.', and '_'");
					if ((d.length < 4 || d.length > 32))
						throw new TypeError("The name value must be between 4 and 32 charactors long")
					this.name = d
				},
			})
		}
		public toJSON = () => Object.fromEntries(Object.entries(this).filter(v => typeof v[1] !== "function"));
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
		enchantId: number;
		enchantmentData: Interfaces.EnchantmentData;
		constructor(baseData: Interfaces.BaseInit, enchantmentData: Interfaces.EnchantmentInit) {
			super({ ...baseData, type: Enums.DataType.Enchantment })
			this.enchantId = enchantmentData.id;
			this.enchantmentData = Object.assign({}, Consts.BlankEnchantmentModifiers, enchantmentData.data)
		}
		public adjustModifiers(modifierKey: Types.EnchantmentKeys, newValue: number | boolean): this {
			const modifierLocations = modifierKey.split('.') as Types.EnchantmentKeyLocationArray
			//@ts-expect-error
			if (modifierLocations[0] === 'effects') this.enchantmentData['effects'][modifierLocations[1]][modifierLocations[2]] = newValue
			//@ts-expect-error
			else if (modifierLocations[0] === 'entityModifiers') this.enchantmentData['entityModifiers'][modifierLocations[1]] = newValue
			//@ts-expect-error
			else if (modifierLocations[0] === 'itemModifiers') this.enchantmentData['itemModifiers'][modifierLocations[1]] = newValue
			return this
		}
		public getModifier(modifierKey: Types.EnchantmentKeys): number | boolean {
			const modifierLocations = modifierKey.split('.') as Types.EnchantmentKeyLocationArray;
			switch (modifierLocations[0]) {
			case 'effects':
				return this.enchantmentData.effects![modifierLocations[1]]![modifierLocations[2]];
			case 'entityModifiers':
				return this.enchantmentData.entityModifiers![modifierLocations[1]]!;
			case 'itemModifiers':
				return this.enchantmentData.itemModifiers![modifierLocations[1]]!;
			default:
				throw new TypeError("Invalid Modifier Key");
			}
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
		modifiedStats: Interfaces.EntityStatsMod;
		constructor(baseData: Interfaces.BaseInit, effectData: Interfaces.EffectInit) {
			super({ ...baseData, type: Enums.DataType.Effect })
			this.modifiedStats = Object.assign({}, effectData.stats, Consts.BlankEntityStatsMod)
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
			super({ ...baseData, type: Enums.DataType.Material })
		}
	}
	/**
	 * Game Object
	 * 
	 * The Game class holds information relating to the current game
	 * @extends InternalData
	 */
	export class Game implements Interfaces.GameFunction {
		constructor(gameData: Interfaces.GameInit) { }
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
			this.vol = new Set().add(0).add(0) as Set<number>
			this.inventory = new StorageContainer({ slots: 0 })
			this.effects = new Map() as Map<number, Effect>
			this.entityType = entityData.type;
		}
		public takeDamage(damage: Interfaces.DamageData): this {
			switch (damage.type) {
			case Enums.DamageType.Physical:
				break;
			case Enums.DamageType.Magic:
				break;
			case Enums.DamageType.Psychological:
				break;
			default:
				break;
			}
			return this
		}
		getBaseHealth(): number {
			return this.hp.base
		}
		addBaseHealth(amount: number): this {
			if (amount < 0) throw new TypeError("Amount must be a positive integer")
			this.hp.base += amount;
			return this
		}
		removeBaseHealth(amount: number): this {
			if (amount < 0) throw new TypeError("Amount must be a positive integer")
			this.hp.base -= amount;
			if (this.hp.base < 0) this.hp.base = 0
			if (this.hp.remaining > this.hp.base) this.hp.remaining = this.hp.base
			return this
		}
		getRemainingHealth(): number {
			return this.hp.remaining;
		}
		addRemainingHealth(amount: number): this {
			if (amount < 0) throw new TypeError("Amount must be a positive integer")
			this.hp.remaining += amount;
			if (this.hp.base < this.hp.remaining) this.hp.remaining = this.hp.base;
			return this
		}
		removeRemainingHealth(amount: number): this {
			if (amount < 0) throw new TypeError("Amount must be a positive integer")
			this.hp.remaining -= amount;
			if (this.hp.remaining < 0) this.hp.remaining = 0
			return this
		}
		getEffects(): Map<number, Effect> {
			return this.effects
		}
		addEffect(effect: Effect): this {
			this.effects.set(this.effects.size, effect)
			return this
		}
		removeEffect(id: number): this {
			this.effects.delete(id);
			return this
		}
		clearEffects(): this {
			this.effects.clear()
			return this
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
			super({ ...baseData, type: Enums.DataType.Tool })
			this.toolType = toolData.toolType;
			this.rank = toolData.rank;
			this.durability = {
				base: Consts.DurabilityMap.get(toolData.rank)!,
				remaining: Consts.DurabilityMap.get(toolData.rank)!,
			}
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
			super(baseData, toolData)
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
			super({ ...baseData, type: Enums.DataType.Food })
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
		sprite: string;
		blockType: Enums.BlockType;
		flags: number;
		constructor(baseData: Interfaces.BaseInit, blockData: Interfaces.BlockInit) {
			super({ ...baseData, type: Enums.DataType.Block });
			this.sprite = blockData.sprite;
			this.blockType = blockData.type;
			this.flags = (blockData.flags) ? blockData.flags.reduce((a, b) => a + b, 0) : 0
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
		slotId: number;
		object: Block | Food | Weapon | Tool | Interfaces.UndefinedObject;
		constructor(storageSlotData: Interfaces.StorageSlotInit) {
			this.slotId = storageSlotData.id;
			this.object = storageSlotData.obj ?? Consts.UndefinedObject;
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
		availableSlots: number;
		slots: Map<number, StorageSlot>;
		constructor(storageContainerData: Interfaces.StorageContainerInit) {
			this.availableSlots = storageContainerData.slots;
			this.slots = new Map(
				new Array(this.availableSlots)
					.map((_, i) => [i, new StorageSlot({ id: i, obj: undefined })])
			)
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
	export const DurabilityMap =
		new Map()
			.set(Enums.MaterialRank.Wood, 59)
			.set(Enums.MaterialRank.Stone, 131)
			.set(Enums.MaterialRank.Gold, 32) //? This hurts me :c
			.set(Enums.MaterialRank.Iron, 250)
			.set(Enums.MaterialRank.Steel, 752)
			.set(Enums.MaterialRank.Diamond, 1561)
			.set(Enums.MaterialRank.Netherite, 2031)
			.set(Enums.MaterialRank.Indestructium, Infinity) as Map<Enums.MaterialRank, number>;
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
			nightVision: {
				requireFullSet: true,
				activated: false,
			},
			waterBreathing: {
				requireFullSet: true,
				activated: false,
			},
			invisibility: {
				requireFullSet: true,
				activated: false,
			},
		},
	}
	export const BlankEntityStatsMod: Interfaces.EntityStatsMod = {
		health: { integer: 0, percentage: 0 },
		physDamage: { integer: 0, percentage: 0 },
		magicDamage: { integer: 0, percentage: 0 },
		psychDamage: { integer: 0, percentage: 0 },
		globalDamage: { integer: 0, percentage: 0 },
		physDefense: { integer: 0, percentage: 0 },
		magicDefense: { integer: 0, percentage: 0 },
		psychDefense: { integer: 0, percentage: 0 },
		globalDefense: { integer: 0, percentage: 0 },
		speed: { integer: 0, percentage: 0 },
		mana: { integer: 0, percentage: 0 },
		intelligence: { integer: 0, percentage: 0 },
		luck: { integer: 0, percentage: 0 },
	}
	/**
	 * The undefined object
	 */
	export const UndefinedObject: Interfaces.UndefinedObject = { name: "", type: undefined, toJSON: () => ({ id: 1, name: "", type: undefined }) }
}
