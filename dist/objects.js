"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Consts = exports.Classes = void 0;
/// <reference types="node" />
const node_events_1 = require("node:events");
var Classes;
(function (Classes) {
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
        static arrayToStats = (data) => ({
            phys: { percentage: data[0][0], integer: data[0][1] },
            magic: { percentage: data[1][0], integer: data[1][1] },
            psyc: { percentage: data[2][0], integer: data[2][1] },
            global: { percentage: data[3][0], integer: data[3][1] },
        });
    }
    Classes.Formatters = Formatters;
    /**
     * @class
     * @extends EventEmitter
     * @classdesc
     * Internal Data Object
     *
     * The base class of almost everything used within the game. Has 3 main properties:
     * `id`: number, `name`: string, and `type`: DataType | undefined
     */
    class InternalData extends node_events_1.EventEmitter {
        id;
        name;
        type;
        constructor(data) {
            super({ captureRejections: true });
            this.id = data.id;
            this.name = data.name;
            this.type = data.type;
            Object.defineProperty(this, 'name', {
                set: d => {
                    if (typeof d !== "string")
                        throw new TypeError("The name must be a string");
                    if (/[^A-Za-z0-9\.\-_ ]/gmi.test(d))
                        throw new TypeError("The name can only contain alphanumeric charactors and the special charactors '-', '.', and '_'");
                    if ((d.length < 4 || d.length > 32) && this instanceof Player)
                        throw new TypeError("The name value must be between 4 and 32 charactors long");
                    this.name = d;
                },
            });
        }
        toJSON = () => Object.fromEntries(Object.entries(this).filter(v => typeof v[1] !== "function"));
    }
    Classes.InternalData = InternalData;
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
    class Enchantment extends InternalData {
        enchantId;
        enchantmentData;
        constructor(baseData, enchantmentData) {
            super({ ...baseData, type: Enums.DataTypeEnum.ENCHANTMENT });
            this.enchantId = enchantmentData.id;
            this.enchantmentData = Object.assign({}, Consts.BlankEnchantmentModifiers, enchantmentData.data);
        }
        adjustModifiers(modifierKey, newValue) {
            const modifierLocations = modifierKey.split('.');
            //@ts-expect-error
            if (modifierLocations[0] === 'effects')
                this.enchantmentData['effects'][modifierLocations[1]][modifierLocations[2]] = newValue;
            //@ts-expect-error
            else if (modifierLocations[0] === 'entityModifiers')
                this.enchantmentData['entityModifiers'][modifierLocations[1]] = newValue;
            //@ts-expect-error
            else if (modifierLocations[0] === 'itemModifiers')
                this.enchantmentData['itemModifiers'][modifierLocations[1]] = newValue;
            return this;
        }
        getModifier(modifierKey) {
            const modifierLocations = modifierKey.split('.');
            switch (modifierLocations[0]) {
                case 'effects':
                    return this.enchantmentData.effects[modifierLocations[1]][modifierLocations[2]];
                case 'entityModifiers':
                    return this.enchantmentData.entityModifiers[modifierLocations[1]];
                case 'itemModifiers':
                    return this.enchantmentData.itemModifiers[modifierLocations[1]];
                default:
                    throw new TypeError("Invalid Modifier Key");
            }
        }
    }
    Classes.Enchantment = Enchantment;
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
    class Effect extends InternalData {
        modifiedStats;
        constructor(baseData, effectData) {
            super({ ...baseData, type: Enums.DataTypeEnum.EFFECT });
            this.modifiedStats = Object.assign({}, effectData.stats, Consts.BlankEntityStatsMod);
        }
    }
    Classes.Effect = Effect;
    /**
     * @class
     * @extends InternalData
     * @classdesc
     * Material Object
     *
     * The Material class holds information relating to materials used and availible to the game.
     * This class is used for any and all materials within the game.
     */
    class Material extends InternalData {
        constructor(baseData, materialData) {
            super({ ...baseData, type: Enums.DataTypeEnum.MATERIAL });
        }
    }
    Classes.Material = Material;
    /**
     * @class
     * @extends InternalData
     * @classdesc
     * Game Object
     *
     * The Game class holds information relating to the current game
     */
    class Game {
        constructor(gameData) { }
    }
    Classes.Game = Game;
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
    class Entity extends InternalData {
        hp;
        def;
        str;
        vol;
        inventory;
        effects;
        constructor(baseData, entityData) {
            super({ ...baseData, type: Enums.DataTypeEnum.ENTITY });
            this.hp = {
                base: entityData.hp,
                remaining: entityData.hp,
            };
            this.def = entityData.def;
            this.str = entityData.str;
            this.vol = new Set().add(0).add(0);
            this.inventory = new StorageContainer({ slots: 0 });
            this.effects = new Map();
        }
        takeDamage(damage) {
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
            return this;
        }
        getBaseHealth() {
            return this.hp.base;
        }
        addBaseHealth(ammount) {
            if (ammount < 0)
                throw new TypeError("Amount must be a possitive integer");
            this.hp.base += ammount;
            return this;
        }
        removeBaseHealth(ammount) {
            if (ammount < 0)
                throw new TypeError("Amount must be a possitive integer");
            this.hp.base -= ammount;
            if (this.hp.base < 0)
                this.hp.base = 0;
            if (this.hp.remaining > this.hp.base)
                this.hp.remaining = this.hp.base;
            return this;
        }
        getRemainingHealth() {
            return this.hp.remaining;
        }
        addRemainingHealth(ammount) {
            if (ammount < 0)
                throw new TypeError("Ammount must be a possitive integer");
            this.hp.remaining += ammount;
            if (this.hp.base < this.hp.remaining)
                this.hp.remaining = this.hp.base;
            return this;
        }
        removeRemainingHealth(ammount) {
            if (ammount < 0)
                throw new TypeError("Amount must be a possitive integer");
            this.hp.remaining -= ammount;
            if (this.hp.remaining < 0)
                this.hp.remaining = 0;
            return this;
        }
        getEffects() {
            return this.effects;
        }
        addEffect(effect) {
            this.effects.set(this.effects.size, effect);
            return this;
        }
        removeEffect(id) {
            this.effects.delete(id);
            return this;
        }
        clearEffects() {
            this.effects.clear();
            return this;
        }
    }
    Classes.Entity = Entity;
    /**
     * @class
     * @extends Entity
     * @classdesc
     * Player Object
     *
     * The Player class holds information relating to players used and availible to the game.
     * This class is used for any and all Players within the game.
     */
    class Player extends Entity {
        constructor(baseData, entityData, playerData) {
            super(baseData, entityData);
            this.inventory = new StorageContainer({ slots: 36 });
        }
    }
    Classes.Player = Player;
    /**
     * @class
     * @extends InternalData
     * @classdesc
     * Tool Object
     *
     * The Tool class holds information relating to Tools used and availible to the game.
     * This class is used for any and all Tools within the game.
     */
    class Tool extends InternalData {
        toolType;
        rank;
        durability;
        enchantments;
        constructor(baseData, toolData) {
            super({ ...baseData, type: Enums.DataTypeEnum.TOOL });
            this.toolType = toolData.toolType;
            this.rank = toolData.rank;
            this.durability = {
                base: Consts.DurabilityMap.get(toolData.rank),
                remaining: Consts.DurabilityMap.get(toolData.rank),
            };
            this.enchantments = toolData.enchantments;
        }
    }
    Classes.Tool = Tool;
    /**
     * @class
     * @extends Tool
     * @classdesc
     * Weapon Object
     *
     * The Weapon class holds information relating to Weapons used and availible to the game.
     * This class is used for any and all Weapons within the game.
     */
    class Weapon extends Tool {
        constructor(baseData, toolData, weaponData) {
            super(baseData, toolData);
        }
    }
    Classes.Weapon = Weapon;
    /**
     * @class
     * @extends InternalData
     * @classdesc
     * Food Object
     *
     * The Food class holds information relating to Foods used and availible to the game.
     * This class is used for any and all Foods within the game.
     */
    class Food extends InternalData {
        constructor(baseData, foodData) {
            super({ ...baseData, type: Enums.DataTypeEnum.FOOD });
        }
    }
    Classes.Food = Food;
    /**
     * @class
     * @extends InternalData
     * @classdesc
     * Block Object
     *
     * The Block class holds information relating to Blocks used and availible to the game.
     * This class is used for any and all Blocks within the game.
     */
    class Block extends InternalData {
        sprite;
        blockType;
        flags;
        constructor(baseData, blockData) {
            super({ ...baseData, type: Enums.DataTypeEnum.BLOCK });
            this.sprite = blockData.sprite;
            this.blockType = blockData.type;
            this.flags = (blockData.flags) ? blockData.flags.reduce((a, b) => a + b, 0) : 0;
        }
    }
    Classes.Block = Block;
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
    class StorageSlot {
        slotId;
        object;
        constructor(storageSlotData) {
            this.slotId = storageSlotData.id;
            this.object = storageSlotData.obj ?? Consts.UndefinedObject;
        }
    }
    Classes.StorageSlot = StorageSlot;
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
    class StorageContainer {
        availableSlots;
        slots;
        constructor(storageContainerData) {
            this.availableSlots = storageContainerData.slots;
            this.slots = new Map(new Array(this.availableSlots)
                .map((_, i) => [i, new StorageSlot({ id: i, obj: undefined })]));
        }
    }
    Classes.StorageContainer = StorageContainer;
})(Classes || (exports.Classes = Classes = {}));
var Consts;
(function (Consts) {
    /**
     * @description
     * Duribility Map
     *
     * Contains all of the duribility values for the material ranks
     * (used in {@link Classes.Tool `Classes.Tool`})
     */
    Consts.DurabilityMap = new Map()
        .set(Enums.MaterialRankEnum.WOOD, 59)
        .set(Enums.MaterialRankEnum.STONE, 131)
        .set(Enums.MaterialRankEnum.GOLD, 32) //? This hurts me :c
        .set(Enums.MaterialRankEnum.IRON, 250)
        .set(Enums.MaterialRankEnum.STEEL, 752)
        .set(Enums.MaterialRankEnum.DIAMOND, 1561)
        .set(Enums.MaterialRankEnum.NETHERITE, 2031)
        .set(Enums.MaterialRankEnum.INDESTRUCTIUM, Infinity);
    /**
     * @description
     * Blank/default version of the
     * {@link Interfaces.EnchantmentDataInterface Enchantment Data Interface}
     */
    Consts.BlankEnchantmentModifiers = {
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
    };
    Consts.BlankEntityStatsMod = {
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
        luck: { integer: 0, percentage: 0 },
    };
    /**
     * @description
     * The undefined object
     */
    Consts.UndefinedObject = { name: "", type: undefined, toJSON: () => ({ id: 1, name: "", type: undefined }) };
})(Consts || (exports.Consts = Consts = {}));
