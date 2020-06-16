// # majorPatchVersion >= 93
import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_PLAYER_STAT_UPDATE_14 extends PacketBase {
  hp: bigint
  mp: number
  drain: bigint
  maxHp: bigint
  maxMp: number
  power: number
  endurance: number
  critRate: number
  critResist: number
  critPower: number
  critPowerPhysical: number
  critPowerMagical: number
  attackSpeed: number
  runSpeed: number
  walkSpeed: number
  impactFactor: number
  balanceFactor: number
  attackMin: number
  attackMax: number
  attackPhysicalMin: number
  attackPhysicalMax: number
  attackMagicalMin: number
  attackMagicalMax: number
  defense: number
  defensePhysical: number
  defenseMagical: number
  defenseReductionPhysical: number
  defenseReductionMagical: number
  piercingPhysical: number
  piercingMagical: number
  unk: number
  resistWeakening: number
  resistPeriodic: number
  resistStun: number
  powerBonus: number
  enduranceBonus: number
  impactFactorBonus: number
  balanceFactorBonus: number
  runSpeedBonus: number
  walkSpeedBonus: number
  attackSpeedBonus: number
  critRateBonus: number
  critResistBonus: number
  critPowerBonus: number
  critPowerPhysicalBonus: number
  critPowerMagicalBonus: number
  attackMinBonus: number
  attackMaxBonus: number
  defenseBonus: number
  attackPhysicalMinBonus: number
  attackPhysicalMaxBonus: number
  defensePhysicalBonus: number
  attackMagicalMinBonus: number
  attackMagicalMaxBonus: number
  defenseMagicalBonus: number
  defenseReductionPhysicalBonus: number
  defenseReductionMagicalBonus: number
  piercingPhysicalBonus: number
  piercingMagicalBonus: number
  resistWeakeningBonus: number
  resistPeriodicBonus: number
  resistStunBonus: number

  /**
     level shown and used for e.g. damage calculations (was used for Blast from the Past)
  */
  level: number

  /**
     see S_USER_STATUS
  */
  status: number
  conditionLevel: number
  alive: boolean
  hpBonus: number
  mpBonus: number

  /**
     Stamina in English version
  */
  condition: number
  contitionMax: number

  /**
     Resolve, Chi, Willpower, etc.
  */
  stamina: number
  staminaMax: number
  staminaBonus: number
  infamy: number
  itemLevelInventory: number
  itemLevel: number
  edge: number
  edgePercentage: number

  /**
     milliseconds
  */
  edgeTimeRemaining: number
  edgeMin: number

  /**
     actual character level used for e.g. learning skills (was used for Blast from the Past)
  */
  trueLevel: number
  flightEnergy: number
  flightId: number
  flightSpeedMul: number

  /**
     sorc fire "edge" (becomes 4 for some reason)
  */
  fireEdge: number

  /**
     sorc ice "edge" (becomes 4 for some reason)
  */
  iceEdge: number

  /**
     sorc lightning "edge" (becomes 4 for some reason)
  */
  lightningEdge: number
  adventureCoins: number
  adventureCoinsMax: number
}
