import { EventEmitter } from 'node:events';

export declare namespace Interfaces {
    /**
     * @description
     * Internal data within the {@link Classes.InternalData `Classes.InternalData`} class
     */
    export interface InternalDataInterface {
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
        type: Enums.DataTypeEnum | undefined
    }
    /**
     * @description
     * Extended version of the {@link InternalDataInterface Internal Data Interface}
     * 
     * Included all of the functions that the {@link Classes.InternalData `Classes.InternalData`} class contains
     */
    export interface InternalFunctionsInterface extends InternalDataInterface {
        /**
         * @description
         * Returns a JSON Object representation of the internal data within the class
         */
        toJSON: () => { [k: string]: any }
    }
    /**
     * @description
     * Initalization data used to initalize the {@link Classes.InternalData `Classes.InternalData`} class
     */
    export interface InternalDataInitInterface {
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
        type: Enums.DataTypeEnum | undefined
    }
    /**
     * @description
     * Base initalization interface used when initalizing a class which extends the
     * {@link Classes.InternalData `Classes.InternalData`} class.
     */
    export interface BaseInitInterface extends Omit<Interfaces.InternalDataInitInterface, 'type'> {

    }
    /**
     * @description
     * Keys found in the objects used in the
     * {@link EnchantmentDataInterface.effects Effects} object within the
     * {@link EnchantmentDataInterface Enchantment Data Interface}
     */
    export interface EnchantmentEffectInterface {
        /**
         * @description
         * Determains if the entity requires the full armour set to recieve the specified effect
         */
        requireFullSet: boolean
        /**
         * @description
         * Determains if the armor piece provides the specified effect
         */
        activated: boolean
    }
    /**
     * @description
     * Full Enchantment Data used within the
     * {@link Classes.Enchantment `Classes.Enchantment`} class
     */
    export interface EnchantmentDataInterface {
        /**
         * @description
         * Stats Modifers for items (Tools, Weapons, Food, etc.)
         */
        itemModifiers: {
            /**
             * @description
             * Base Efficency Modifier of a tool (default: `1`)
             */
            efficiencyModifier: number | undefined
            /**
             * @description
             * Physical Attack Modifier of a tool (default: `1`)
             */
            physicalAttackModifier: number | undefined
            /**
             * @description
             * Mogical Attack Modifier of a tool (default: `1`)
             */
            magicAttackModifier: number | undefined
            /**
             * @description
             * Psycological Attack Modifier of a tool (default: `1`)
             */
            psycologicalAttackModifier: number | undefined
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
         * Stats Modifers for Entities (Armour, Food Effects, etc.)
         */
        entityModifiers: {
            /**
             * @description
             * Physical Attack Modifier of an entity (default: `1`)
             */
            physicalAttackModifier: number | undefined
            /**
             * @description
             * Mogical Attack Modifier of an entity (default: `1`)
             */
            magicAttackModifier: number | undefined
            /**
             * @description
             * Psycological Attack Modifier of an entity (default: `1`)
             */
            psycologicalAttackModifier: number | undefined
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
             * Mogical Defense Modifier of an entity (default: `1`)
             */
            magicDefenseModifier: number | undefined
            /**
             * @description
             * Psycological Defense Modifier of an entity (default: `1`)
             */
            psycologicalDefenseModifier: number | undefined
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
             * Configurations on if the entity should recieve night vision if they have the armour equipted
             * (default: {requireFullSet: true, activated: false})
             * */
            nightVision: EnchantmentEffectInterface | undefined
            /**
             * @description
             * Configurations on if the entity should recieve water breathing if they have the armour equipted
             * (default: {requireFullSet: true, activated: false})
             * */
            waterBreathing: EnchantmentEffectInterface | undefined
            /**
             * @description
             * Configurations on if the entity should recieve invisability if they have the armour equipted
             * (default: {requireFullSet: true, activated: false})
             * */
            invisibility: EnchantmentEffectInterface | undefined
        } | undefined
    }
    /**
     * @description
     * Internal data within the {@link Classes.Enchantment `Classes.Enchantment`} class
     */
    export interface EnchantmentInterface extends InternalDataInterface {
        /**
         * @description
         * Identifier of the enchantment
         */
        enchantId: number;
        /**
         * @description
         * All of the modifiers that the enchantment provides
         */
        enchantmentData: EnchantmentDataInterface;
    }
    /**
     * @description
     * Extended version of the {@link EnchantmentInterface Enchantment Interface}
     * 
     * Included all of the functions that the {@link Classes.Enchantment `Classes.Enchantment`} class contains
     */
    export interface EnchantmentFunctionInterface extends InternalFunctionsInterface, EnchantmentInterface {
        /**
         * @param modifierKey The key of which identifies the enchantment data section to alter
         * @param newValue The new value of the specified data point
         * @description
         * Adjusts a data point of the enchantment
         */
        adjustModifiers(modifierKey: Types.EnchantmentKeysType, newValue: number | boolean): this
        /**
         * @param modifierKey The key of which identifies the enchantment data section to retrieve
         * @description
         * Retrieves a data point from the enchantment
         */
        getModifier(modifierKey: Types.EnchantmentKeysType): number | boolean
    }
    /**
     * @description
     * Initalization data used to initalize the {@link Classes.Enchantment `Classes.Enchantment`} class
     */
    export interface EnchantmentInitInterface {
        /**
         * @description
         * The identifier for the enchantment
         */
        id: number;
        /**
         * @description
         * All of the modifiers that the enchantment provides
         */
        data: EnchantmentDataInterface;
    }
    /**
     * @description
     * Layout of entity/item stats
     */
    export interface StatusModificationInterface {
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
     * @description
     * Full data dealing with entity stats modification
     */
    export interface EntityStatsModInterface {
        /**
         * @description
         * Health Modifier Data
         */
        health: StatusModificationInterface
        /**
         * @description
         * Physical Damage Modifier Data
         */
        physDamage: StatusModificationInterface
        /**
         * @description
         * Magical Damage Modifier Data
         */
        magicDamage: StatusModificationInterface
        /**
         * @description
         * Phycological Damage Modifier Data
         */
        psycDamage: StatusModificationInterface
        /**
         * @description
         * Global Damage Modifier Data
         */
        globalDamage: StatusModificationInterface
        /**
         * @description
         * Physcial Defense Modifier Data
         */
        physDefence: StatusModificationInterface
        /**
         * @description
         * Magical Defense Modifier Data
         */
        magicDefence: StatusModificationInterface
        /**
         * @description
         * Psycological Defense Modifier Data
         */
        psycDefence: StatusModificationInterface
        /**
         * @description
         * Global Defense Modifier Data
         */
        globalDefence: StatusModificationInterface
        /**
         * @description
         * Speed Modifier Data
         */
        speed: StatusModificationInterface
        /**
         * @description
         * Mana Modifier Data
         */
        mana: StatusModificationInterface
        /**
         * @description
         * Inteligence Modifier Data
         */
        inteligence: StatusModificationInterface
        /**
         * @description
         * Luck Modifier Data
         */
        luck: StatusModificationInterface
    }
    /**
     * @description
     * Contains data relating to the damage dealt to an entity
     */
    export interface DamageDataInterface {
        /**
         * @description
         * Ammount of damage dealt to the entity
         */
        amm: number
        /**
         * @description
         * Type of damage taken
         */
        type: Enums.DamageTypeEnum
    }
    /**
     * @description
     * Internal data within the {@link Classes.Effect `Classes.Effect`} class
     */
    export interface EffectInterface extends InternalDataInterface {
        /**
         * @description
         * The Stats modifier data that the effect provides
         */
        modifiedStats: EntityStatsModInterface
    }
    /**
     * @description
     * Extended version of the {@link EffectInterface Effect Interface}
     * 
     * Included all of the functions that the {@link Classes.Effect `Classes.Effect`} class contains
     */
    export interface EffectFunctionsInterface extends InternalFunctionsInterface, EffectInterface {

    }
    /**
     * @description
     * Initalization data used to initalize the {@link Classes.Effect `Classes.Effect`} class
     */
    export interface EffectInitInterface {
        /**
         * @description
         * The Stats modifier data that the effect provides
         */
        stats: EntityStatsModInterface
    }
    /**
     * @description
     * Internal data within the {@link Classes.Material `Classes.Material`} class
     */
    export interface MaterialInterface extends InternalDataInterface {

    }
    /**
     * @description
     * Extended version of the {@link MaterialInterface Material Interface}
     * 
     * Included all of the functions that the {@link Classes.Material `Classes.Material`} class contains
     */
    export interface MaterialFunctionInterface extends InternalFunctionsInterface, MaterialInterface {

    }
    /**
     * @description
     * Initalization data used to initalize the {@link Classes.Material `Classes.Material`} class
     */
    export interface MaterialInitInterface {

    }
    /**
     * @description
     * Internal data within the {@link Classes.Game `Classes.Game`} class
     */
    export interface GameInterface {

    }
    /**
     * @description
     * Extended version of the {@link GameInterface Game Interface}
     * 
     * Included all of the functions that the {@link Classes.Game `Classes.Game`} class contains
     */
    export interface GameFunctionInterface extends GameInterface {

    }
    /**
     * @description
     * Initalization data used to initalize the {@link Classes.Game `Classes.Game`} class
     */
    export interface GameInitInterface {

    }
    /**
     * @description
     * Contains data relating to the Attack Damage that an entity deals
     */
    export interface AttackClassStatsInterface {
        /**
         * @description
         * Physical Damage Modifier Data
         */
        phys: StatusModificationInterface
        /**
         * @description
         * Magical Damage Modifier Data
         */
        magic: StatusModificationInterface
        /**
         * @description
         * Phycological Damage Modifier Data
         */
        psyc: StatusModificationInterface
        /**
         * @description
         * Global Damage Modifier Data
         */
        global: StatusModificationInterface
    }
    /**
     * @description
     * Interface for data points which have a `base` and a `remaining` value
     */
    export interface ItemBaseRemainingStatsInterface {
        /**
         * @description
         * The base ammount
         */
        base: number
        /**
         * @description
         * The remaining ammount
         */
        remaining: number
    }
    /**
     * @description
     * Internal data within the {@link Classes.Entity `Classes.Entity`} class
     */
    export interface EntityInterface {
        /**
         * @description
         * The health points that the entity has
         */
        hp: ItemBaseRemainingStatsInterface;
        /**
         * @description
         * The defense stats that the entity has
         */
        def: AttackClassStatsInterface;
        /**
         * @description
         * The strength stats that the entity has
         */
        str: AttackClassStatsInterface;
        /**
         * @description
         * The movement volocity that the entity has
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
     * @description
     * Extended version of the {@link EntityInterface Entity Interface}
     * 
     * Included all of the functions that the {@link Classes.Entity `Classes.Entity`} class contains
     */
    export interface EntityFunctionInterface extends InternalFunctionsInterface, EntityInterface {
        /**
         * @param damage Data for the damage to deal
         * @description
         * Deal damage to the target entity using a strict ammount and damage type
         */
        takeDamage(damage: DamageDataInterface): this
        /**
         * @description
         * Retreaves the base health stat
         */
        getBaseHealth(): number
        /**
         * @param ammount Data for the HP to add
         * @description
         * Adds a set ammount to the base health
         */
        addBaseHealth(ammount: number): this
        /**
         * @param ammount Data for the HP to remove
         * @description
         * Removes a set ammount from the base health
         */
        removeBaseHealth(ammount: number): this
        /**
         * @description
         * Retreaves the remaining health stat
         */
        getRemainingHealth(): number
        /**
         * @param ammount Data for the HP to add
         * @description
         * Adds a set ammount to the remaining health (capped at the base value)
         */
        addRemainingHealth(ammount: number): this
        /**
         * @param ammount Data for the HP to remove
         * @description
         * Removes a set ammount from the remaining health
         */
        removeRemainingHealth(ammount: number): this
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
     * @description
     * Initalization data used to initalize the {@link Classes.Entity `Classes.Entity`} class
     */
    export interface EntityInitInterface {
        /**
         * @description
         * The health points that the entity has
         */
        hp: number;
        /**
         * @description
         * The defense stats that the entity has
         */
        def: AttackClassStatsInterface;
        /**
         * @description
         * The strength stats that the entity has
         */
        str: AttackClassStatsInterface;
    }
    /**
     * @description
     * Internal data within the {@link Classes.Player `Classes.Player`} class
     * 
     * (Extends the {@link EntityInterface Entity Interface})
    */
    export interface PlayerInterface extends EntityInterface {

    }
    /**
     * @description
     * Extended version of the {@link PlayerInterface Player Interface}
     * 
     * Included all of the functions that the {@link Classes.Player `Classes.Player`} class contains
     * 
     * (Extends the {@link EntityFunctionInterface Entity Functions Interface})
     */
    export interface PlayerFunctionInterface extends PlayerInterface, EntityFunctionInterface {

    }
    /**
     * @description
     * Initalization data used to initalize the {@link Classes.Player `Classes.Player`} class
     */
    export interface PlayerInitInterface {

    }
    /**
     * @description
     * Internal data within the {@link Classes.Tool `Classes.Tool`} class
     */
    export interface ToolInterface extends InternalDataInterface {
        /**
         * @description
         * The tool type
         */
        toolType: Enums.ToolTypeEnum
        /**
         * @description
         * The material rank of the tool
         */
        rank: Enums.MaterialRankEnum
        /**
         * @description
         * The durability stats for the tool
         */
        durability: ItemBaseRemainingStatsInterface
        /**
         * @description
         * The map contains all the enchantments on the tool
         */
        enchantments: Map<number, Classes.Enchantment>
    }
    /**
     * @description
     * Extended version of the {@link ToolInterface Tool Interface}
     * 
     * Included all of the functions that the {@link Classes.Tool `Classes.Tool`} class contains
     */
    export interface ToolFunctionInterface extends InternalFunctionsInterface, ToolInterface {

    }
    /**
     * @description
     * Initalization data used to initalize the {@link Classes.Tool `Classes.Tool`} class
     */
    export interface ToolInitInterface {
        /**
         * @description
         * The tool type
         */
        toolType: Enums.ToolTypeEnum
        /**
         * @description
         * The material rank of the tool
         */
        rank: Enums.MaterialRankEnum
        /**
         * @description
         * The map contains all the enchantments on the tool
         */
        enchantments: Map<number, Classes.Enchantment>
    }
    /**
     * @description
     * Internal data within the {@link Classes.Weapon `Classes.Weapon`} class
     * 
     * (Extends {@link ToolInterface Tool Interface})
     */
    export interface WeaponInterface extends ToolInterface {

    }
    /**
     * @description
     * Extended version of the {@link WeaponInterface Weapon Interface}
     * 
     * Included all of the functions that the {@link Classes.Weapon `Classes.Weapon`} class contains
     * 
     * (Extends the {@link ToolFunctionInterface Tool Functions Interface})
     */
    export interface WeaponFunctionInterface extends WeaponInterface, ToolFunctionInterface {

    }
    /**
     * @description
     * Initalization data used to initalize the {@link Classes.Weapon `Classes.Weapon`} class
     */
    export interface WeaponInitInterface {

    }
    /**
     * @description
     * Internal data within the {@link Classes.Food `Classes.Food`} class
     */
    export interface FoodInterface extends InternalDataInterface {

    }
    /**
     * @description
     * Extended version of the {@link FoodInterface Food Interface}
     * 
     * Included all of the functions that the {@link Classes.Food `Classes.Food`} class contains
     */
    export interface FoodFunctionsInterface extends InternalFunctionsInterface, FoodInterface {

    }
    /**
     * @description
     * Initalization data used to initalize the {@link Classes.Food `Classes.Food`} class
     */
    export interface FoodInitInterface {

    }
    /**
     * @description
     * Internal data within the {@link Classes.Block `Classes.Block`} class
     */
    export interface BlockInterface extends InternalDataInterface {
        /**
         * @description
         * The path to the sprite (excluding the `/assets` dir)
         */
        sprite: string
        /**
         * @description
         * The block type
         */
        blockType: Enums.BlockTypeEnum
        /**
         * @description
         * The flags for the block
         */
        flags: Enums.BlockFlagsEnum | 0
    }
    /**
     * @description
     * Extended version of the {@link BlockInterface Block Interface}
     * 
     * Included all of the functions that the {@link Classes.Block `Classes.Block`} class contains
     */
    export interface BlockFunctionsInterface extends InternalFunctionsInterface, BlockInterface {

    }
    /**
     * @description
     * Initalization data used to initalize the {@link Classes.Block `Classes.Block`} class
     */
    export interface BlockInitInterface {
        /**
         * @description
         * The path to the sprite (excluding the `/assets` dir)
         */
        sprite: string
        /**
         * @description
         * The block type
         */
        type: Enums.BlockTypeEnum
        /**
         * @description
         * The flags for the block
         */
        flags: Array<Enums.BlockFlagsEnum> | 0
    }
    /**
     * @description
     * Internal data within the {@link Classes.StorageSlot `Classes.StorageSlot`} class
     */
    export interface StorageSlotInterface {
        /**
         * @description
         * The ID of the slot
         */
        slotId: number
        /**
         * @description
         * The object data for the slot
         */
        object: Classes.Block | Classes.Food | Classes.Weapon | Classes.Tool | Types.UndefinedObjectType
    }
    /**
     * @description
     * Extended version of the {@link StorageSlotInterface Storage Slot Interface}
     * 
     * Included all of the functions that the {@link Classes.StorageSlot `Classes.StorageSlot`} class contains
     */
    export interface StorageSlotFunctionsInterface extends StorageSlotInterface {

    }
    /**
     * @description
     * Initalization data used to initalize the {@link Classes.StorageSlot `Classes.StorageSlot`} class
     */
    export interface StorageSlotInitInterface {
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
     * @description
     * Internal data within the {@link Classes.StorageContainer `Classes.StorageContainer`} class
     */
    export interface StorageContainerInterface {
        /**
         * @description
         * The ammount of slots available
         */
        availableSlots: number
        /**
         * @description
         * A map containing the Storage Slots
         */
        slots: Map<number, Classes.StorageSlot>
    }
    /**
     * @description
     * Extended version of the {@link StorageContainerInterface Storage Container Interface}
     * 
     * Included all of the functions that the {@link Classes.StorageContainer `Classes.StorageContainer`} class contains
     */
    export interface StorageContainerFunctionsInterface extends StorageContainerInterface {

    }
    /**
     * @description
     * Initalization data used to initalize the {@link Classes.StorageContainer `Classes.StorageContainer`} class
     */
    export interface StorageContainerInitInterface {
        /**
         * @description
         * The ammount of avavilable slots
         */
        slots: number
    }
}

export declare namespace Types {
    /**
     * @description
     * Keys within the
     * {@link Interfaces.EnchantmentDataInterface.itemModifiers Item Modifiers} section of the
     * {@link Interfaces.EnchantmentDataInterface Enchantment Data Interface}
     */
    export type EnchantmentItemModifiersType =
        "physicalAttackModifier" | "magicAttackModifier" |
        "psycologicalAttackModifier" | "globalAttackModifier" |
        "baseAttackModifier" | "durabilityModifier";
    /**
     * @description
     * Keys within the
     * {@link Interfaces.EnchantmentDataInterface.entityModifiers Entity Modifiers} section of the
     * {@link Interfaces.EnchantmentDataInterface Enchantment Data Interface}
     */
    export type EnchantmentEntityModifiersType =
        "physicalAttackModifier" | "magicAttackModifier" |
        "psycologicalAttackModifier" | "globalAttackModifier" |
        "baseAttackModifier" | "physicalDefenseModifier" |
        "magicDefenseModifier" | "psycologicalDefenseModifier" |
        "globalDefenseModifier" | "baseDefenseModifier" |
        "healthModifier" | "regenerationModifier" |
        "speedModifier" | "waterMovementModifier";
    /**
     * @description
     * Keys within the
     * {@link Interfaces.EnchantmentDataInterface.effects Effects} section of the
     * {@link Interfaces.EnchantmentDataInterface Enchantment Data Interface}
     */
    export type EnchantmentEffectsType =
        "nightVision" | "waterBreathing" | "invisability";
    /**
     * @description
     * Keys within the {@link Interfaces.EnchantmentEffectInterface Enchantment Effects} section
     */
    export type EnchantmentEffectOptionsType =
        "requireFullSet" | "activated";
    /**
     * @description
     * Location Discriptor that represents a location within the {@link Interfaces.EnchantmentDataInterface Enchantment Data Interface}
     */
    export type EnchantmentKeysType =
        `itemModifiers.${EnchantmentItemModifiersType}` |
        `entityModifiers.${EnchantmentEntityModifiersType}` |
        `effects.${EnchantmentEffectsType}.${EnchantmentEffectOptionsType}`;
    /**
     * @description
     * Split-up Array-mapped version of the {@link Types.EnchantmentKeysType Enchantment Keys Type}
     */
    export type EnchantmentKeyLocationArrayType =
        ["itemModifiers", EnchantmentItemModifiersType] |
        ["entityModifiers", EnchantmentEntityModifiersType] |
        ["effects", EnchantmentEffectsType, EnchantmentEffectOptionsType];
    /**
     * @description
     * The undefined object class type
     */
    export type UndefinedObjectType = { name: string, type: undefined, toJSON: () => ({ id: 1, name: "", type: undefined }) }
}

export declare namespace Enums {
    /**
     * @description
     * Damage Types used to identify what type of damage to deal
     * (used in both {@link Classes.Entity `Classes.Entity`} and {@link Classes.Weapon `Classes.Weapon`})
     */
    export enum DamageTypeEnum {
        /**
         * @description
         * Physical Damage
         */
        PHYSICAL,
        /**
         * @description
         * Magical Damage
         */
        MAGIC,
        /**
         * @description
         * Psycological Damage
         */
        PSYCOLOGICAL
    }
    /**
     * @description
     * Data Type to identify what type of data is being stored
     * (used in {@link Classes.InternalData `Classes.InternalData`})
     */
    export enum DataTypeEnum {
        /**
         * @description
         * Block Data
         */
        BLOCK,
        /**
         * @description
         * Material Data
         */
        MATERIAL,
        /**
         * @description
         * Tool Data
         */
        TOOL,
        /**
         * @description
         * Food Data
         */
        FOOD,
        /**
         * @description
         * Enchantment Data
         */
        ENCHANTMENT,
        /**
         * @description
         * Effect Data
         */
        EFFECT,
        /**
         * @description
         * Entity Data
         */
        ENTITY
    }
    /**
     * @description
     * The material rank of the object
     * (used in {@link Classes.Tool `Classes.Tool`})
     */
    export enum MaterialRankEnum {
        /**
         * @description
         * Wooden-ranking Material
         */
        WOOD,
        /**
         * @description
         * Stone-ranking Material
         */
        STONE,/**
        * @description
        * Ranking-ranking Material
        */
        GOLD,
        /**
         * @description
         * Iron-ranking Material
         */
        IRON,
        /**
         * @description
         * Steel-ranking Material
         */
        STEEL,
        /**
         * @description
         * Diamond-ranking Material
         */
        DIAMOND,
        /**
         * @description
         * Netherite-ranking Material
         */
        NETHERITE,
        /**
         * @description
         * Indestructium-ranking Material
         */
        INDESTRUCTIUM,
    }
    /**
     * @description
     * Block Data Flags used to add on special pre-defined behaviors within the game
     * (used in {@link Classes.Block `Classes.Block`})
     */
    export enum BlockFlagsEnum {
        /**
         * @description
         * Immune to explosives
         */
        NOBLAST = 1 << 0,
        /**
         * @description
         * Affected by gravity
         */
        GRAVITY = 1 << 1,
        /**
         * @description
         * Entities take damage upon contact
         */
        TOUCHDAMAGE = 1 << 2,
    }
    /**
     * @description
     * Block type identifer used to determain pre-defined actions, coliders, and physics for the block
     * (used in {@link Classes.Block `Classes.Block`})
     */
    export enum BlockTypeEnum {
        /**
         * @description
         * Solid block
         */
        SOLID,
        /**
         * @description
         * Liquid block
         */
        LIQUID,
        /**
         * @description
         * Gaseous Block
         */
        GAS,
    }
    /**
     * @description
     * Tool types used to identify what type of tool an object is
     * (used in {@link Classes.Tool `Classes.Tool`})
     */
    export enum ToolTypeEnum {
        /**
         * @description
         * Axe Tool
         */
        AXE,
        /**
         * @description
         * Hoe Tool
         */
        HOE,
        /**
         * @description
         * Pickaxe Tool
         */
        PICKAXE,
        /**
         * @description
         * Shovel Tool
         */
        SHOVEL
    }
}

export namespace Classes {
    /**
     * @class
     * @classdesc
     * Formatters Object
     * 
     * The Formatters class contains utility formating functions that can assist in development for the application.
     */
    export class Formatters {
        /**
         * @param data The array-set data to be converted into a valid {@link Interfaces.AttackClassStatsInterface DamageStat} object
         * @description
         * Takes a singular array containing four sub-arrays (each with 2 values [percentage, integer]), each
         * mapping out to an object point which will be used as a {@link Interfaces.AttackClassStatsInterface DamageStat} object
         */
        static arrayToStats = (data: [[number, number], [number, number], [number, number], [number, number]]) => ({
            phys: { percentage: data[0][0], integer: data[0][1] },
            magic: { percentage: data[1][0], integer: data[1][1] },
            psyc: { percentage: data[2][0], integer: data[2][1] },
            global: { percentage: data[3][0], integer: data[3][1] }
        })
    }
    /**
     * @class
     * @extends EventEmitter
     * @classdesc
     * Internal Data Object
     * 
     * The base class of almost everything used within the game. Has 3 main properties:
     * `id`: number, `name`: string, and `type`: DataType | undefined
     */
    export class InternalData extends EventEmitter implements Interfaces.InternalFunctionsInterface {
        id: number;
        name: string;
        type: Enums.DataTypeEnum | undefined;
        constructor(data: Interfaces.InternalDataInitInterface) {
            super({ captureRejections: true })
            this.id = data.id
            this.name = data.name
            this.type = data.type
            Object.defineProperty(this, 'name', {
                set: (d) => {
                    if (typeof d !== "string") throw new TypeError("The name must be a string")
                    if (/[^A-z0-9\.\-_ ]/gmi.test(d)) throw new TypeError("The name can only contain alphanumeric charactors and the special charactors '-', '.', and '_'");
                    if ((d.length < 4 || d.length > 32) && this instanceof Player) throw new TypeError("The name value must be between 4 and 32 charactors long")
                    this.name = d
                }
            })
        }
        public toJSON = () => Object.fromEntries(Object.entries(this).filter(([k, v]) => typeof v !== "function"));
    }
    /**
     * @class
     * @extends InternalData
     * @classdesc
     * Enchantment Object
     * 
     * The Enchantment class holds information relating to enchantments used and availible to the game.
     * This class is used for any and all enchantments within the game.
     * 
     * Main property is the `enchantmentData` varible in which contains all of the modifiers that the enchantment
     * provides.
     */
    export class Enchantment extends InternalData implements Interfaces.EnchantmentFunctionInterface {
        enchantId: number;
        enchantmentData: Interfaces.EnchantmentDataInterface;
        constructor(baseData: Interfaces.BaseInitInterface, enchantmentData: Interfaces.EnchantmentInitInterface) {
            super({ ...baseData, type: Enums.DataTypeEnum.ENCHANTMENT })
            this.enchantId = enchantmentData.id;
            this.enchantmentData = Object.assign({}, Consts.BlankEnchantmentModifiers, enchantmentData.data) as Interfaces.EnchantmentDataInterface
        }
        public adjustModifiers(modifierKey: Types.EnchantmentKeysType, newValue: number | boolean): this {
            const modifierLocations = modifierKey.split('.') as Types.EnchantmentKeyLocationArrayType
            //@ts-expect-error
            if (modifierLocations[0] === 'effects') this.enchantmentData['effects'][modifierLocations[1]][modifierLocations[2]] = newValue
            //@ts-expect-error
            else if (modifierLocations[0] === 'entityModifiers') this.enchantmentData['entityModifiers'][modifierLocations[1]] = newValue
            //@ts-expect-error
            else if (modifierLocations[0] === 'itemModifiers') this.enchantmentData['itemModifiers'][modifierLocations[1]] = newValue
            return this
        }
        public getModifier(modifierKey: Types.EnchantmentKeysType): number | boolean {
            const modifierLocations = modifierKey.split('.') as Types.EnchantmentKeyLocationArrayType
            //@ts-expect-error
            return (modifierLocations[0] === 'effects') ? this.enchantmentData['effects'][modifierLocations[1]][modifierLocations[2]] : this.enchantmentData[modifierLocations[0]][modifierLocations[1]]
        }
    }
    /**
     * @class
     * @extends InternalData
     * @classdesc
     * Effect Object
     * 
     * The Effect class holds information relating to status effects used and availible to the game.
     * This class is used for any and all status effects within the game.
     * 
     * Main property is the `modifiedStats` varible in which contains all of the modifiers that the
     * status effect provides.
     */
    export class Effect extends InternalData implements Interfaces.EffectFunctionsInterface {
        modifiedStats: Interfaces.EntityStatsModInterface;
        constructor(baseData: Interfaces.BaseInitInterface, effectData: Interfaces.EffectInitInterface) {
            super({ ...baseData, type: Enums.DataTypeEnum.EFFECT })
            this.modifiedStats = Object.assign({}, effectData.stats, Consts.BlankEntityStatsMod) as Interfaces.EntityStatsModInterface
        }
    }
    /**
     * @class
     * @extends InternalData
     * @classdesc
     * Material Object
     * 
     * The Material class holds information relating to materials used and availible to the game.
     * This class is used for any and all materials within the game.
     */
    export class Material extends InternalData implements Interfaces.MaterialFunctionInterface {
        constructor(baseData: Interfaces.BaseInitInterface, materialData: Interfaces.MaterialInitInterface) {
            super({ ...baseData, type: Enums.DataTypeEnum.MATERIAL })
        }
    }
    /**
     * @class
     * @extends InternalData
     * @classdesc
     * Game Object
     * 
     * The Game class holds information relating to the current game
     */
    export class Game implements Interfaces.GameFunctionInterface {
        constructor(gameData: Interfaces.GameInitInterface) { }
    }
    /**
     * @class
     * @extends InternalData
     * @classdesc
     * Entity Object
     * 
     * The Entity class holds information relating to entites used and availible to the game.
     * This class is used for any and all entities (including players) within the game.
     * 
     * The class has many values defined in the {@link Interfaces.EntityInterface Entity Interface}
     */
    export class Entity extends InternalData implements Interfaces.EntityFunctionInterface {
        hp: Interfaces.ItemBaseRemainingStatsInterface;
        def: Interfaces.AttackClassStatsInterface;
        str: Interfaces.AttackClassStatsInterface;
        vol: Set<number>;
        inventory: StorageContainer;
        effects: Map<number, Effect>;
        constructor(baseData: Interfaces.BaseInitInterface, entityData: Interfaces.EntityInitInterface) {
            super({ ...baseData, type: Enums.DataTypeEnum.ENTITY });
            this.hp = {
                base: entityData.hp,
                remaining: entityData.hp
            };
            this.def = entityData.def;
            this.str = entityData.str;
            this.vol = new Set().add(0).add(0) as Set<number>
            this.inventory = new StorageContainer({ slots: 0 })
            this.effects = new Map() as Map<number, Effect>
        }
        public takeDamage(damage: Interfaces.DamageDataInterface): this {
            switch (damage.type) {
                case Enums.DamageTypeEnum.PHYSICAL:
                    break;
                case Enums.DamageTypeEnum.MAGIC:
                    break;
                case Enums.DamageTypeEnum.PSYCOLOGICAL:
                    break;
                default:
                    break;
            }
            return this
        }
        getBaseHealth(): number {
            return this.hp.base
        }
        addBaseHealth(ammount: number): this {
            if (ammount < 0) throw new TypeError("Amount must be a possitive integer")
            this.hp.base += ammount;
            return this
        }
        removeBaseHealth(ammount: number): this {
            if (ammount < 0) throw new TypeError("Amount must be a possitive integer")
            this.hp.base -= ammount;
            if (this.hp.base < 0) this.hp.base = 0
            if (this.hp.remaining > this.hp.base) this.hp.remaining = this.hp.base
            return this
        }
        getRemainingHealth(): number {
            return this.hp.remaining;
        }
        addRemainingHealth(ammount: number): this {
            if (ammount < 0) throw new TypeError("Ammount must be a possitive integer")
            this.hp.remaining += ammount;
            if (this.hp.base < this.hp.remaining) this.hp.remaining = this.hp.base;
            return this
        }
        removeRemainingHealth(ammount: number): this {
            if (ammount < 0) throw new TypeError("Amount must be a possitive integer")
            this.hp.remaining -= ammount;
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
     * @class
     * @extends Entity
     * @classdesc
     * Player Object
     * 
     * The Player class holds information relating to players used and availible to the game.
     * This class is used for any and all Players within the game.
     */
    export class Player extends Entity implements Interfaces.PlayerFunctionInterface {
        constructor(baseData: Interfaces.BaseInitInterface, entityData: Interfaces.EntityInitInterface, playerData: Interfaces.PlayerInitInterface) {
            super(baseData, entityData)
            this.inventory = new StorageContainer({ slots: 36 })
        }
    }
    /**
     * @class
     * @extends InternalData
     * @classdesc
     * Tool Object
     * 
     * The Tool class holds information relating to Tools used and availible to the game.
     * This class is used for any and all Tools within the game.
     */
    export class Tool extends InternalData implements Interfaces.ToolFunctionInterface {
        toolType: Enums.ToolTypeEnum;
        rank: Enums.MaterialRankEnum;
        durability: Interfaces.ItemBaseRemainingStatsInterface;
        enchantments: Map<number, Enchantment>;
        constructor(baseData: Interfaces.BaseInitInterface, toolData: Interfaces.ToolInitInterface) {
            super({ ...baseData, type: Enums.DataTypeEnum.TOOL })
            this.toolType = toolData.toolType;
            this.rank = toolData.rank;
            this.durability = {
                base: Consts.DurabilityMap.get(toolData.rank) as number,
                remaining: Consts.DurabilityMap.get(toolData.rank) as number
            }
            this.enchantments = toolData.enchantments;
        }
    }
    /**
     * @class
     * @extends Tool
     * @classdesc
     * Weapon Object
     * 
     * The Weapon class holds information relating to Weapons used and availible to the game.
     * This class is used for any and all Weapons within the game.
     */
    export class Weapon extends Tool implements Interfaces.WeaponFunctionInterface {
        constructor(baseData: Interfaces.BaseInitInterface, toolData: Interfaces.ToolInitInterface, weaponData: Interfaces.WeaponInitInterface) {
            super(baseData, toolData)
        }
    }
    /**
     * @class
     * @extends InternalData
     * @classdesc
     * Food Object
     * 
     * The Food class holds information relating to Foods used and availible to the game.
     * This class is used for any and all Foods within the game.
     */
    export class Food extends InternalData implements Interfaces.FoodFunctionsInterface {
        constructor(baseData: Interfaces.BaseInitInterface, foodData: Interfaces.FoodInitInterface) {
            super({ ...baseData, type: Enums.DataTypeEnum.FOOD })
        }
    }
    /**
     * @class
     * @extends InternalData
     * @classdesc
     * Block Object
     * 
     * The Block class holds information relating to Blocks used and availible to the game.
     * This class is used for any and all Blocks within the game.
     */
    export class Block extends InternalData implements Interfaces.BlockFunctionsInterface {
        sprite: string;
        blockType: Enums.BlockTypeEnum;
        flags: number;
        constructor(baseData: Interfaces.BaseInitInterface, blockData: Interfaces.BlockInitInterface) {
            super({ ...baseData, type: Enums.DataTypeEnum.BLOCK });
            this.sprite = blockData.sprite;
            this.blockType = blockData.type;
            this.flags = (blockData.flags) ? blockData.flags.reduce((a, b) => a + b, 0) : 0
        }
    }
    /**
     * @class
     * @extends InternalData
     * @classdesc
     * Storage Slot Object
     * 
     * The Storage Slot class holds information relating to Storage Slots used and availible to the game.
     * This class is used for any and all Storage Slots within the game.
     * 
     * Main property is the `object` varible in which contains the stored item data
     */
    export class StorageSlot implements Interfaces.StorageSlotFunctionsInterface {
        slotId: number;
        object: Block | Food | Weapon | Tool | Types.UndefinedObjectType;
        constructor(storageSlotData: Interfaces.StorageSlotInitInterface) {
            this.slotId = storageSlotData.id
            this.object = (storageSlotData.obj === undefined) ? Consts.UndefinedObject : storageSlotData.obj
        }
    }
    /**
     * @class
     * @extends InternalData
     * @classdesc
     * Storage Container Object
     * 
     * The Storage Container class holds information relating to Storage Containers used and availible to the game.
     * This class is used for any and all Storage Containers within the game.
     * 
     * This class is composed of sub-{@link StorageSlot Storage Slots} which contain all of the stored item data
     */
    export class StorageContainer implements Interfaces.StorageContainerFunctionsInterface {
        availableSlots: number;
        slots: Map<number, StorageSlot>;
        constructor(storageContainerData: Interfaces.StorageContainerInitInterface) {
            this.availableSlots = storageContainerData.slots
            this.slots = new Map()
            for (let i = 0; i < this.availableSlots; i++) {
                this.slots.set(i, new StorageSlot({ id: i, obj: undefined }))
            }
        }
    }
}

export namespace Consts {
    /**
     * @description
     * Duribility Map
     * 
     * Contains all of the duribility values for the material ranks
     * (used in {@link Classes.Tool `Classes.Tool`})
     */
    export const DurabilityMap =
        new Map()
            .set(Enums.MaterialRankEnum.WOOD, 59)
            .set(Enums.MaterialRankEnum.STONE, 131)
            .set(Enums.MaterialRankEnum.GOLD, 32) //? This hurts me :c
            .set(Enums.MaterialRankEnum.IRON, 250)
            .set(Enums.MaterialRankEnum.STEEL, 752)
            .set(Enums.MaterialRankEnum.DIAMOND, 1561)
            .set(Enums.MaterialRankEnum.NETHERITE, 2031)
            .set(Enums.MaterialRankEnum.INDESTRUCTIUM, Infinity) as Map<Enums.MaterialRankEnum, number>;
    /**
     * @description
     * Blank/default version of the
     * {@link Interfaces.EnchantmentDataInterface Enchantment Data Interface}
     */
    export const BlankEnchantmentModifiers: Interfaces.EnchantmentDataInterface = {
        itemModifiers: {
            efficiencyModifier: 1,
            physicalAttackModifier: 1,
            magicAttackModifier: 1,
            psycologicalAttackModifier: 1,
            globalAttackModifier: 1,
            baseAttackModifier: 1,
            durabilityModifier: 1,
        },
        entityModifiers: {
            physicalAttackModifier: 1,
            magicAttackModifier: 1,
            psycologicalAttackModifier: 1,
            globalAttackModifier: 1,
            baseAttackModifier: 1,
            physicalDefenseModifier: 1,
            magicDefenseModifier: 1,
            psycologicalDefenseModifier: 1,
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
                activated: false
            },
            waterBreathing: {
                requireFullSet: true,
                activated: false
            },
            invisibility: {
                requireFullSet: true,
                activated: false
            },
        },
    }
    export const BlankEntityStatsMod: Interfaces.EntityStatsModInterface = {
        health: { integer: 0, percentage: 0 },
        physDamage: { integer: 0, percentage: 0 },
        magicDamage: { integer: 0, percentage: 0 },
        psycDamage: { integer: 0, percentage: 0 },
        globalDamage: { integer: 0, percentage: 0 },
        physDefence: { integer: 0, percentage: 0 },
        magicDefence: { integer: 0, percentage: 0 },
        psycDefence: { integer: 0, percentage: 0 },
        globalDefence: { integer: 0, percentage: 0 },
        speed: { integer: 0, percentage: 0 },
        mana: { integer: 0, percentage: 0 },
        inteligence: { integer: 0, percentage: 0 },
        luck: { integer: 0, percentage: 0 }
    }
    /**
     * @description
     * The undefined object
     */
    export const UndefinedObject: Types.UndefinedObjectType = { name: "", type: undefined, toJSON: () => ({ id: 1, name: "", type: undefined, }) }
}