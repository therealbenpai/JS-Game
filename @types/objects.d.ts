/// <reference types="node" />
import { EventEmitter } from 'node:events';
export declare namespace Interfaces {
    /**
     * @description
     * Internal data within the {@link Classes.InternalData `Classes.InternalData`} class
     */
    interface InternalDataInterface {
        /**
         * @description
         * The internal ID of the object
         */
        id: number;
        /**
         * @description
         * The human-readable display name of the object
         */
        name: string;
        /**
         * @description
         * The data type of the object
         */
        type: Enums.DataTypeEnum | undefined;
    }
    /**
     * @description
     * Extended version of the {@link InternalDataInterface Internal Data Interface}
     *
     * Included all of the functions that the {@link Classes.InternalData `Classes.InternalData`} class contains
     */
    interface InternalFunctionsInterface extends InternalDataInterface {
        /**
         * @description
         * Returns a JSON Object representation of the internal data within the class
         */
        toJSON: () => Record<string, any>;
    }
    /**
     * @description
     * Initalization data used to initalize the {@link Classes.InternalData `Classes.InternalData`} class
     */
    interface InternalDataInitInterface {
        /**
         * @description
         * The internal ID of the object
         */
        id: number;
        /**
         * @description
         * The human-readable display name of the object
         */
        name: string;
        /**
         * @description
         * The data type of the object
         */
        type: Enums.DataTypeEnum | undefined;
    }
    /**
     * @description
     * Base initalization interface used when initalizing a class which extends the
     * {@link Classes.InternalData `Classes.InternalData`} class.
     */
    type BaseInitInterface = Omit<Interfaces.InternalDataInitInterface, 'type'>;
    /**
     * @description
     * Keys found in the objects used in the
     * {@link EnchantmentDataInterface.effects Effects} object within the
     * {@link EnchantmentDataInterface Enchantment Data Interface}
     */
    interface EnchantmentEffectInterface {
        /**
         * @description
         * Determains if the entity requires the full armour set to recieve the specified effect
         */
        requireFullSet: boolean;
        /**
         * @description
         * Determains if the armor piece provides the specified effect
         */
        activated: boolean;
    }
    /**
     * @description
     * Full Enchantment Data used within the
     * {@link Classes.Enchantment `Classes.Enchantment`} class
     */
    interface EnchantmentDataInterface {
        /**
         * @description
         * Stats Modifers for items (Tools, Weapons, Food, etc.)
         */
        itemModifiers: {
            /**
             * @description
             * Base Efficency Modifier of a tool (default: `1`)
             */
            efficiencyModifier: number | undefined;
            /**
             * @description
             * Physical Attack Modifier of a tool (default: `1`)
             */
            physicalAttackModifier: number | undefined;
            /**
             * @description
             * Mogical Attack Modifier of a tool (default: `1`)
             */
            magicAttackModifier: number | undefined;
            /**
             * @description
             * Psycological Attack Modifier of a tool (default: `1`)
             */
            psycologicalAttackModifier: number | undefined;
            /**
             * @description
             * Global Attack Modifier of a tool (default: `1`)
             */
            globalAttackModifier: number | undefined;
            /**
             * @description
             * Base Attack Modifier of a tool (default: `1`)
             */
            baseAttackModifier: number | undefined;
            /**
             * @description
             * Durability Modifier of a tool (default: `1`)
             */
            durabilityModifier: number | undefined;
        } | undefined;
        /**
         * @description
         * Stats Modifers for Entities (Armour, Food Effects, etc.)
         */
        entityModifiers: {
            /**
             * @description
             * Physical Attack Modifier of an entity (default: `1`)
             */
            physicalAttackModifier: number | undefined;
            /**
             * @description
             * Mogical Attack Modifier of an entity (default: `1`)
             */
            magicAttackModifier: number | undefined;
            /**
             * @description
             * Psycological Attack Modifier of an entity (default: `1`)
             */
            psycologicalAttackModifier: number | undefined;
            /**
             * @description
             * Global Attack Modifier of an entity (default: `1`)
             */
            globalAttackModifier: number | undefined;
            /**
             * @description
             * Base Attack Modifier of an entity (default: `1`)
             */
            baseAttackModifier: number | undefined;
            /**
             * @description
             * Physical Defense Modifier of an entity (default: `1`)
             */
            physicalDefenseModifier: number | undefined;
            /**
             * @description
             * Mogical Defense Modifier of an entity (default: `1`)
             */
            magicDefenseModifier: number | undefined;
            /**
             * @description
             * Psycological Defense Modifier of an entity (default: `1`)
             */
            psycologicalDefenseModifier: number | undefined;
            /**
             * @description
             * Global Defense Modifier of an entity (default: `1`)
             */
            globalDefenseModifier: number | undefined;
            /**
             * @description
             * Base Defense Modifier of an entity (default: `1`)
             */
            baseDefenseModifier: number | undefined;
            /**
             * @description
             * Base Health Modifier of an entity (default: `1`)
             */
            healthModifier: number | undefined;
            /**
             * @description
             * Base Regeneration Modifier of an entity (default: `1`)
             */
            regenerationModifier: number | undefined;
            /**
             * @description
             * Base Speed Modifier of an entity (default: `1`)
             */
            speedModifier: number | undefined;
            /**
             * @description
             * Base Water-based Movement Modifier of an entity (default: `1`)
             */
            waterMovementModifier: number | undefined;
        } | undefined;
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
            nightVision: EnchantmentEffectInterface | undefined;
            /**
             * @description
             * Configurations on if the entity should recieve water breathing if they have the armour equipted
             * (default: {requireFullSet: true, activated: false})
             * */
            waterBreathing: EnchantmentEffectInterface | undefined;
            /**
             * @description
             * Configurations on if the entity should recieve invisability if they have the armour equipted
             * (default: {requireFullSet: true, activated: false})
             * */
            invisibility: EnchantmentEffectInterface | undefined;
        } | undefined;
    }
    /**
     * @description
     * Internal data within the {@link Classes.Enchantment `Classes.Enchantment`} class
     */
    interface EnchantmentInterface extends InternalDataInterface {
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
    interface EnchantmentFunctionInterface extends InternalFunctionsInterface, EnchantmentInterface {
        /**
         * @param modifierKey The key of which identifies the enchantment data section to alter
         * @param newValue The new value of the specified data point
         * @description
         * Adjusts a data point of the enchantment
         */
        adjustModifiers(modifierKey: Types.EnchantmentKeysType, newValue: number | boolean): this;
        /**
         * @param modifierKey The key of which identifies the enchantment data section to retrieve
         * @description
         * Retrieves a data point from the enchantment
         */
        getModifier(modifierKey: Types.EnchantmentKeysType): number | boolean;
    }
    /**
     * @description
     * Initalization data used to initalize the {@link Classes.Enchantment `Classes.Enchantment`} class
     */
    interface EnchantmentInitInterface {
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
    interface StatusModificationInterface {
        /**
         * @description
         * The percentage modifier (`x.yz` ==> `xyz`%)
         */
        percentage: number;
        /**
         * @description
         * The integer modifier (`x` ==> `+ x`)
         */
        integer: number;
    }
    /**
     * @description
     * Full data dealing with entity stats modification
     */
    interface EntityStatsModInterface {
        /**
         * @description
         * Health Modifier Data
         */
        health: StatusModificationInterface;
        /**
         * @description
         * Physical Damage Modifier Data
         */
        physDamage: StatusModificationInterface;
        /**
         * @description
         * Magical Damage Modifier Data
         */
        magicDamage: StatusModificationInterface;
        /**
         * @description
         * Phycological Damage Modifier Data
         */
        psycDamage: StatusModificationInterface;
        /**
         * @description
         * Global Damage Modifier Data
         */
        globalDamage: StatusModificationInterface;
        /**
         * @description
         * Physcial Defense Modifier Data
         */
        physDefence: StatusModificationInterface;
        /**
         * @description
         * Magical Defense Modifier Data
         */
        magicDefence: StatusModificationInterface;
        /**
         * @description
         * Psycological Defense Modifier Data
         */
        psycDefence: StatusModificationInterface;
        /**
         * @description
         * Global Defense Modifier Data
         */
        globalDefence: StatusModificationInterface;
        /**
         * @description
         * Speed Modifier Data
         */
        speed: StatusModificationInterface;
        /**
         * @description
         * Mana Modifier Data
         */
        mana: StatusModificationInterface;
        /**
         * @description
         * Inteligence Modifier Data
         */
        inteligence: StatusModificationInterface;
        /**
         * @description
         * Luck Modifier Data
         */
        luck: StatusModificationInterface;
    }
    /**
     * @description
     * Contains data relating to the damage dealt to an entity
     */
    interface DamageDataInterface {
        /**
         * @description
         * Ammount of damage dealt to the entity
         */
        amm: number;
        /**
         * @description
         * Type of damage taken
         */
        type: Enums.DamageTypeEnum;
    }
    /**
     * @description
     * Internal data within the {@link Classes.Effect `Classes.Effect`} class
     */
    interface EffectInterface extends InternalDataInterface {
        /**
         * @description
         * The Stats modifier data that the effect provides
         */
        modifiedStats: EntityStatsModInterface;
    }
    /**
     * @description
     * Extended version of the {@link EffectInterface Effect Interface}
     *
     * Included all of the functions that the {@link Classes.Effect `Classes.Effect`} class contains
     */
    interface EffectFunctionsInterface extends InternalFunctionsInterface, EffectInterface {
    }
    /**
     * @description
     * Initalization data used to initalize the {@link Classes.Effect `Classes.Effect`} class
     */
    interface EffectInitInterface {
        /**
         * @description
         * The Stats modifier data that the effect provides
         */
        stats: EntityStatsModInterface;
    }
    /**
     * @description
     * Internal data within the {@link Classes.Material `Classes.Material`} class
     */
    type MaterialInterface = InternalDataInterface;
    /**
     * @description
     * Extended version of the {@link MaterialInterface Material Interface}
     *
     * Included all of the functions that the {@link Classes.Material `Classes.Material`} class contains
     */
    interface MaterialFunctionInterface extends InternalFunctionsInterface, MaterialInterface {
    }
    /**
     * @description
     * Initalization data used to initalize the {@link Classes.Material `Classes.Material`} class
     */
    interface MaterialInitInterface {
    }
    /**
     * @description
     * Internal data within the {@link Classes.Game `Classes.Game`} class
     */
    interface GameInterface {
    }
    /**
     * @description
     * Extended version of the {@link GameInterface Game Interface}
     *
     * Included all of the functions that the {@link Classes.Game `Classes.Game`} class contains
     */
    type GameFunctionInterface = GameInterface;
    /**
     * @description
     * Initalization data used to initalize the {@link Classes.Game `Classes.Game`} class
     */
    interface GameInitInterface {
    }
    /**
     * @description
     * Contains data relating to the Attack Damage that an entity deals
     */
    interface AttackClassStatsInterface {
        /**
         * @description
         * Physical Damage Modifier Data
         */
        phys: StatusModificationInterface;
        /**
         * @description
         * Magical Damage Modifier Data
         */
        magic: StatusModificationInterface;
        /**
         * @description
         * Phycological Damage Modifier Data
         */
        psyc: StatusModificationInterface;
        /**
         * @description
         * Global Damage Modifier Data
         */
        global: StatusModificationInterface;
    }
    /**
     * @description
     * Interface for data points which have a `base` and a `remaining` value
     */
    interface ItemBaseRemainingStatsInterface {
        /**
         * @description
         * The base ammount
         */
        base: number;
        /**
         * @description
         * The remaining ammount
         */
        remaining: number;
    }
    /**
     * @description
     * Internal data within the {@link Classes.Entity `Classes.Entity`} class
     */
    interface EntityInterface {
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
        effects: Map<number, Classes.Effect>;
    }
    /**
     * @description
     * Extended version of the {@link EntityInterface Entity Interface}
     *
     * Included all of the functions that the {@link Classes.Entity `Classes.Entity`} class contains
     */
    interface EntityFunctionInterface extends InternalFunctionsInterface, EntityInterface {
        /**
         * @param damage Data for the damage to deal
         * @description
         * Deal damage to the target entity using a strict ammount and damage type
         */
        takeDamage(damage: DamageDataInterface): this;
        /**
         * @description
         * Retreaves the base health stat
         */
        getBaseHealth(): number;
        /**
         * @param ammount Data for the HP to add
         * @description
         * Adds a set ammount to the base health
         */
        addBaseHealth(ammount: number): this;
        /**
         * @param ammount Data for the HP to remove
         * @description
         * Removes a set ammount from the base health
         */
        removeBaseHealth(ammount: number): this;
        /**
         * @description
         * Retreaves the remaining health stat
         */
        getRemainingHealth(): number;
        /**
         * @param ammount Data for the HP to add
         * @description
         * Adds a set ammount to the remaining health (capped at the base value)
         */
        addRemainingHealth(ammount: number): this;
        /**
         * @param ammount Data for the HP to remove
         * @description
         * Removes a set ammount from the remaining health
         */
        removeRemainingHealth(ammount: number): this;
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
        addEffect(effect: Classes.Effect): this;
        /**
         * @param id The ID of the effect to remove
         * @description
         * Removes an effect to the entity
         */
        removeEffect(id: number): this;
        /**
         * @description
         * Clears all of the effects from the entity
         */
        clearEffects(): this;
    }
    /**
     * @description
     * Initalization data used to initalize the {@link Classes.Entity `Classes.Entity`} class
     */
    interface EntityInitInterface {
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
    type PlayerInterface = EntityInterface;
    /**
     * @description
     * Extended version of the {@link PlayerInterface Player Interface}
     *
     * Included all of the functions that the {@link Classes.Player `Classes.Player`} class contains
     *
     * (Extends the {@link EntityFunctionInterface Entity Functions Interface})
     */
    interface PlayerFunctionInterface extends PlayerInterface, EntityFunctionInterface {
    }
    /**
     * @description
     * Initalization data used to initalize the {@link Classes.Player `Classes.Player`} class
     */
    interface PlayerInitInterface {
    }
    /**
     * @description
     * Internal data within the {@link Classes.Tool `Classes.Tool`} class
     */
    interface ToolInterface extends InternalDataInterface {
        /**
         * @description
         * The tool type
         */
        toolType: Enums.ToolTypeEnum;
        /**
         * @description
         * The material rank of the tool
         */
        rank: Enums.MaterialRankEnum;
        /**
         * @description
         * The durability stats for the tool
         */
        durability: ItemBaseRemainingStatsInterface;
        /**
         * @description
         * The map contains all the enchantments on the tool
         */
        enchantments: Map<number, Classes.Enchantment>;
    }
    /**
     * @description
     * Extended version of the {@link ToolInterface Tool Interface}
     *
     * Included all of the functions that the {@link Classes.Tool `Classes.Tool`} class contains
     */
    interface ToolFunctionInterface extends InternalFunctionsInterface, ToolInterface {
    }
    /**
     * @description
     * Initalization data used to initalize the {@link Classes.Tool `Classes.Tool`} class
     */
    interface ToolInitInterface {
        /**
         * @description
         * The tool type
         */
        toolType: Enums.ToolTypeEnum;
        /**
         * @description
         * The material rank of the tool
         */
        rank: Enums.MaterialRankEnum;
        /**
         * @description
         * The map contains all the enchantments on the tool
         */
        enchantments: Map<number, Classes.Enchantment>;
    }
    /**
     * @description
     * Internal data within the {@link Classes.Weapon `Classes.Weapon`} class
     *
     * (Extends {@link ToolInterface Tool Interface})
     */
    type WeaponInterface = ToolInterface;
    /**
     * @description
     * Extended version of the {@link WeaponInterface Weapon Interface}
     *
     * Included all of the functions that the {@link Classes.Weapon `Classes.Weapon`} class contains
     *
     * (Extends the {@link ToolFunctionInterface Tool Functions Interface})
     */
    interface WeaponFunctionInterface extends WeaponInterface, ToolFunctionInterface {
    }
    /**
     * @description
     * Initalization data used to initalize the {@link Classes.Weapon `Classes.Weapon`} class
     */
    interface WeaponInitInterface {
    }
    /**
     * @description
     * Internal data within the {@link Classes.Food `Classes.Food`} class
     */
    type FoodInterface = InternalDataInterface;
    /**
     * @description
     * Extended version of the {@link FoodInterface Food Interface}
     *
     * Included all of the functions that the {@link Classes.Food `Classes.Food`} class contains
     */
    interface FoodFunctionsInterface extends InternalFunctionsInterface, FoodInterface {
    }
    /**
     * @description
     * Initalization data used to initalize the {@link Classes.Food `Classes.Food`} class
     */
    interface FoodInitInterface {
    }
    /**
     * @description
     * Internal data within the {@link Classes.Block `Classes.Block`} class
     */
    interface BlockInterface extends InternalDataInterface {
        /**
         * @description
         * The path to the sprite (excluding the `/assets` dir)
         */
        sprite: string;
        /**
         * @description
         * The block type
         */
        blockType: Enums.BlockTypeEnum;
        /**
         * @description
         * The flags for the block
         */
        flags: Enums.BlockFlagsEnum | 0;
    }
    /**
     * @description
     * Extended version of the {@link BlockInterface Block Interface}
     *
     * Included all of the functions that the {@link Classes.Block `Classes.Block`} class contains
     */
    interface BlockFunctionsInterface extends InternalFunctionsInterface, BlockInterface {
    }
    /**
     * @description
     * Initalization data used to initalize the {@link Classes.Block `Classes.Block`} class
     */
    interface BlockInitInterface {
        /**
         * @description
         * The path to the sprite (excluding the `/assets` dir)
         */
        sprite: string;
        /**
         * @description
         * The block type
         */
        type: Enums.BlockTypeEnum;
        /**
         * @description
         * The flags for the block
         */
        flags: Enums.BlockFlagsEnum[] | 0;
    }
    /**
     * @description
     * Internal data within the {@link Classes.StorageSlot `Classes.StorageSlot`} class
     */
    interface StorageSlotInterface {
        /**
         * @description
         * The ID of the slot
         */
        slotId: number;
        /**
         * @description
         * The object data for the slot
         */
        object: Classes.Block | Classes.Food | Classes.Weapon | Classes.Tool | Types.UndefinedObjectType;
    }
    /**
     * @description
     * Extended version of the {@link StorageSlotInterface Storage Slot Interface}
     *
     * Included all of the functions that the {@link Classes.StorageSlot `Classes.StorageSlot`} class contains
     */
    type StorageSlotFunctionsInterface = StorageSlotInterface;
    /**
     * @description
     * Initalization data used to initalize the {@link Classes.StorageSlot `Classes.StorageSlot`} class
     */
    interface StorageSlotInitInterface {
        /**
         * @description
         * The ID of the slot
         */
        id: number;
        /**
         * @description
         * The object data for the slot
         */
        obj: Classes.Block | Classes.Food | Classes.Weapon | Classes.Tool | undefined;
    }
    /**
     * @description
     * Internal data within the {@link Classes.StorageContainer `Classes.StorageContainer`} class
     */
    interface StorageContainerInterface {
        /**
         * @description
         * The ammount of slots available
         */
        availableSlots: number;
        /**
         * @description
         * A map containing the Storage Slots
         */
        slots: Map<number, Classes.StorageSlot>;
    }
    /**
     * @description
     * Extended version of the {@link StorageContainerInterface Storage Container Interface}
     *
     * Included all of the functions that the {@link Classes.StorageContainer `Classes.StorageContainer`} class contains
     */
    type StorageContainerFunctionsInterface = StorageContainerInterface;
    /**
     * @description
     * Initalization data used to initalize the {@link Classes.StorageContainer `Classes.StorageContainer`} class
     */
    interface StorageContainerInitInterface {
        /**
         * @description
         * The ammount of avavilable slots
         */
        slots: number;
    }
}
export declare namespace Types {
    /**
     * @description
     * Keys within the
     * {@link Interfaces.EnchantmentDataInterface.itemModifiers Item Modifiers} section of the
     * {@link Interfaces.EnchantmentDataInterface Enchantment Data Interface}
     */
    type EnchantmentItemModifiersType = "physicalAttackModifier" | "magicAttackModifier" | "psycologicalAttackModifier" | "globalAttackModifier" | "baseAttackModifier" | "durabilityModifier";
    /**
     * @description
     * Keys within the
     * {@link Interfaces.EnchantmentDataInterface.entityModifiers Entity Modifiers} section of the
     * {@link Interfaces.EnchantmentDataInterface Enchantment Data Interface}
     */
    type EnchantmentEntityModifiersType = "physicalAttackModifier" | "magicAttackModifier" | "psycologicalAttackModifier" | "globalAttackModifier" | "baseAttackModifier" | "physicalDefenseModifier" | "magicDefenseModifier" | "psycologicalDefenseModifier" | "globalDefenseModifier" | "baseDefenseModifier" | "healthModifier" | "regenerationModifier" | "speedModifier" | "waterMovementModifier";
    /**
     * @description
     * Keys within the
     * {@link Interfaces.EnchantmentDataInterface.effects Effects} section of the
     * {@link Interfaces.EnchantmentDataInterface Enchantment Data Interface}
     */
    type EnchantmentEffectsType = "nightVision" | "waterBreathing" | "invisibility";
    /**
     * @description
     * Keys within the {@link Interfaces.EnchantmentEffectInterface Enchantment Effects} section
     */
    type EnchantmentEffectOptionsType = "requireFullSet" | "activated";
    /**
     * @description
     * Location Discriptor that represents a location within the {@link Interfaces.EnchantmentDataInterface Enchantment Data Interface}
     */
    type EnchantmentKeysType = `itemModifiers.${EnchantmentItemModifiersType}` | `entityModifiers.${EnchantmentEntityModifiersType}` | `effects.${EnchantmentEffectsType}.${EnchantmentEffectOptionsType}`;
    /**
     * @description
     * Split-up Array-mapped version of the {@link Types.EnchantmentKeysType Enchantment Keys Type}
     */
    type EnchantmentKeyLocationArrayType = [
        "itemModifiers",
        EnchantmentItemModifiersType
    ] | [
        "entityModifiers",
        EnchantmentEntityModifiersType
    ] | [
        "effects",
        EnchantmentEffectsType,
        EnchantmentEffectOptionsType
    ];
    /**
     * @description
     * The undefined object class type
     */
    interface UndefinedObjectType {
        name: string;
        type: undefined;
        toJSON: () => ({
            id: 1;
            name: "";
            type: undefined;
        });
    }
}
export declare namespace Enums {
    /**
     * @description
     * Damage Types used to identify what type of damage to deal
     * (used in both {@link Classes.Entity `Classes.Entity`} and {@link Classes.Weapon `Classes.Weapon`})
     */
    enum DamageTypeEnum {
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
    enum DataTypeEnum {
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
    enum MaterialRankEnum {
        /**
         * @description
         * Wooden-ranking Material
         */
        WOOD,
        /**
         * @description
         * Stone-ranking Material
         */
        STONE,
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
        INDESTRUCTIUM
    }
    /**
     * @description
     * Block Data Flags used to add on special pre-defined behaviors within the game
     * (used in {@link Classes.Block `Classes.Block`})
     */
    enum BlockFlagsEnum {
        /**
         * @description
         * Immune to explosives
         */
        NOBLAST = 1,
        /**
         * @description
         * Affected by gravity
         */
        GRAVITY = 2,
        /**
         * @description
         * Entities take damage upon contact
         */
        TOUCHDAMAGE = 4
    }
    /**
     * @description
     * Block type identifer used to determain pre-defined actions, coliders, and physics for the block
     * (used in {@link Classes.Block `Classes.Block`})
     */
    enum BlockTypeEnum {
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
        GAS
    }
    /**
     * @description
     * Tool types used to identify what type of tool an object is
     * (used in {@link Classes.Tool `Classes.Tool`})
     */
    enum ToolTypeEnum {
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
export declare namespace Classes {
    /**
     * @class
     * @classdesc
     * Formatters Object
     *
     * The Formatters class contains utility formating functions that can assist in development for the application.
     */
    class Formatters {
        /**
         * Takes a singular array containing four sub-arrays (each with 2 values [percentage, integer]), each
         * mapping out to an object point which will be used as a {@link Interfaces.AttackClassStatsInterface DamageStat} object
         * @param data The array-set data to be converted into a valid {@link Interfaces.AttackClassStatsInterface DamageStat} object
         */
        static arrayToStats: (data: [[
            number,
            number
        ], [
            number,
            number
        ], [
            number,
            number
        ], [
            number,
            number
        ]]) => {
            phys: {
                percentage: number;
                integer: number;
            };
            magic: {
                percentage: number;
                integer: number;
            };
            psyc: {
                percentage: number;
                integer: number;
            };
            global: {
                percentage: number;
                integer: number;
            };
        };
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
    class InternalData extends EventEmitter implements Interfaces.InternalFunctionsInterface {
        id: number;
        name: string;
        type: Enums.DataTypeEnum | undefined;
        constructor(data: Interfaces.InternalDataInitInterface);
        toJSON: () => {
            [k: string]: any;
        };
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
    class Enchantment extends InternalData implements Interfaces.EnchantmentFunctionInterface {
        enchantId: number;
        enchantmentData: Interfaces.EnchantmentDataInterface;
        constructor(baseData: Interfaces.BaseInitInterface, enchantmentData: Interfaces.EnchantmentInitInterface);
        adjustModifiers(modifierKey: Types.EnchantmentKeysType, newValue: number | boolean): this;
        getModifier(modifierKey: Types.EnchantmentKeysType): number | boolean;
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
    class Effect extends InternalData implements Interfaces.EffectFunctionsInterface {
        modifiedStats: Interfaces.EntityStatsModInterface;
        constructor(baseData: Interfaces.BaseInitInterface, effectData: Interfaces.EffectInitInterface);
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
    class Material extends InternalData implements Interfaces.MaterialFunctionInterface {
        constructor(baseData: Interfaces.BaseInitInterface, materialData: Interfaces.MaterialInitInterface);
    }
    /**
     * @class
     * @extends InternalData
     * @classdesc
     * Game Object
     *
     * The Game class holds information relating to the current game
     */
    class Game implements Interfaces.GameFunctionInterface {
        constructor(gameData: Interfaces.GameInitInterface);
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
    class Entity extends InternalData implements Interfaces.EntityFunctionInterface {
        hp: Interfaces.ItemBaseRemainingStatsInterface;
        def: Interfaces.AttackClassStatsInterface;
        str: Interfaces.AttackClassStatsInterface;
        vol: Set<number>;
        inventory: StorageContainer;
        effects: Map<number, Effect>;
        constructor(baseData: Interfaces.BaseInitInterface, entityData: Interfaces.EntityInitInterface);
        takeDamage(damage: Interfaces.DamageDataInterface): this;
        getBaseHealth(): number;
        addBaseHealth(ammount: number): this;
        removeBaseHealth(ammount: number): this;
        getRemainingHealth(): number;
        addRemainingHealth(ammount: number): this;
        removeRemainingHealth(ammount: number): this;
        getEffects(): Map<number, Effect>;
        addEffect(effect: Effect): this;
        removeEffect(id: number): this;
        clearEffects(): this;
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
    class Player extends Entity implements Interfaces.PlayerFunctionInterface {
        constructor(baseData: Interfaces.BaseInitInterface, entityData: Interfaces.EntityInitInterface, playerData: Interfaces.PlayerInitInterface);
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
    class Tool extends InternalData implements Interfaces.ToolFunctionInterface {
        toolType: Enums.ToolTypeEnum;
        rank: Enums.MaterialRankEnum;
        durability: Interfaces.ItemBaseRemainingStatsInterface;
        enchantments: Map<number, Enchantment>;
        constructor(baseData: Interfaces.BaseInitInterface, toolData: Interfaces.ToolInitInterface);
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
    class Weapon extends Tool implements Interfaces.WeaponFunctionInterface {
        constructor(baseData: Interfaces.BaseInitInterface, toolData: Interfaces.ToolInitInterface, weaponData: Interfaces.WeaponInitInterface);
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
    class Food extends InternalData implements Interfaces.FoodFunctionsInterface {
        constructor(baseData: Interfaces.BaseInitInterface, foodData: Interfaces.FoodInitInterface);
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
    class Block extends InternalData implements Interfaces.BlockFunctionsInterface {
        sprite: string;
        blockType: Enums.BlockTypeEnum;
        flags: number;
        constructor(baseData: Interfaces.BaseInitInterface, blockData: Interfaces.BlockInitInterface);
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
    class StorageSlot implements Interfaces.StorageSlotFunctionsInterface {
        slotId: number;
        object: Block | Food | Weapon | Tool | Types.UndefinedObjectType;
        constructor(storageSlotData: Interfaces.StorageSlotInitInterface);
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
    class StorageContainer implements Interfaces.StorageContainerFunctionsInterface {
        availableSlots: number;
        slots: Map<number, StorageSlot>;
        constructor(storageContainerData: Interfaces.StorageContainerInitInterface);
    }
}
export declare namespace Consts {
    /**
     * @description
     * Duribility Map
     *
     * Contains all of the duribility values for the material ranks
     * (used in {@link Classes.Tool `Classes.Tool`})
     */
    const DurabilityMap: Map<Enums.MaterialRankEnum, number>;
    /**
     * @description
     * Blank/default version of the
     * {@link Interfaces.EnchantmentDataInterface Enchantment Data Interface}
     */
    const BlankEnchantmentModifiers: Interfaces.EnchantmentDataInterface;
    const BlankEntityStatsMod: Interfaces.EntityStatsModInterface;
    /**
     * @description
     * The undefined object
     */
    const UndefinedObject: Types.UndefinedObjectType;
}
