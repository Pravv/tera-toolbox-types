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
  level: number
  status: number
  conditionLevel: number
  alive: boolean
  hpBonus: number
  mpBonus: number
  condition: number
  contitionMax: number
  stamina: number
  staminaMax: number
  staminaBonus: number
  infamy: number
  itemLevelInventory: number
  itemLevel: number
  edge: number
  edgePercentage: number
  edgeTimeRemaining: number
  edgeMin: number
  trueLevel: number
  flightEnergy: number
  flightId: number
  flightSpeedMul: number
  fireEdge: number
  iceEdge: number
  lightningEdge: number
  adventureCoins: number
  adventureCoinsMax: number
}
