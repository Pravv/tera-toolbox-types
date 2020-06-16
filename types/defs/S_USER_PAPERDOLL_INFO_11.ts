// # majorPatchVersion >= 86
import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_USER_PAPERDOLL_INFO_11_items_passivitySets {
  index: number
  masterworkBonus: number
  itemLevel: number
  minItemLevel: number
  maxItemLevel: number
  passivities: number[]
}

export class S_USER_PAPERDOLL_INFO_11_items {
  id: number
  dbid: bigint
  ownerId: bigint
  container: number
  pocket: number
  slot: number
  amount: number
  enchant: number
  durability: number
  soulbound: boolean
  crystal1: number
  crystal2: number
  crystal3: number
  crystal4: number
  crystal5: number
  passivitySet: number
  extraPassivitySets: number
  remodel: number
  dye: number
  dyeSecRemaining: number
  dyeDate: bigint
  dyeExpiryDate: bigint
  masterwork: boolean
  enigma: number
  timesBrokered: number
  enchantAdvantage: number
  enchantBonus: number
  enchantBonusMaxPlus: number
  boundToPlayer: bigint
  awakened: boolean
  liberationStatus: number
  feedstock: number
  boundToItem: number
  hasEtching: boolean
  pcbang: boolean
  xp: bigint
  passivitySets: S_USER_PAPERDOLL_INFO_11_items_passivitySets[]
  mergedPassivities: number[]
}

export class S_USER_PAPERDOLL_INFO_11_dungeons {
  id: number
  type: number
  cooldown: number
  entriesDay: number
  entriesWeek: number
}

export class S_USER_PAPERDOLL_INFO_11_equipmentOverrides {
  slot: number
  id: number
}

export class S_USER_PAPERDOLL_INFO_11 extends PacketBase {
  templateId: number
  gameId: bigint
  playerId: number
  actionMode: number
  level: number
  gatherMineral: number
  gatherBug: number
  gatherHerb: number
  gatherEnergy: number
  homunculusSkillLevel: number
  totalXp: bigint
  levelXp: bigint
  nextLevelXp: bigint
  talentLevel: number
  talentXp: bigint
  talentDailyXp: number
  weapon: number
  body: number
  hand: number
  feet: number
  underwear: number
  head: number
  face: number
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
  impact: number
  balance: number
  resistWeakening: number
  resistPeriodic: number
  resistStun: number
  powerBonus: number
  enduranceBonus: number
  impactFactorBonus: number
  balanceFactorBonus: number
  runSpeedBonus: number
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
  impactBonus: number
  balanceBonus: number
  resistWeakeningBonus: number
  resistPeriodicBonus: number
  resistStunBonus: number
  vitality: number
  condition: number
  conditionMax: number
  itemLevelInventory: number
  itemLevel: number
  infamy: number
  styleHead: number
  styleFace: number
  styleBack: number
  styleWeapon: number
  styleBody: number
  styleFootprint: number
  flightDataId: number
  flightSpeedMultiplier: number

  /**
     echo'd from C packets
  */
  zoom: boolean

  /**
     see S_ITEMLIST
  */
  items: S_USER_PAPERDOLL_INFO_11_items[]

  /**
     see S_DUNGEON_COOL_TIME_LIST
  */
  dungeons: S_USER_PAPERDOLL_INFO_11_dungeons[]
  equipmentOverrides: S_USER_PAPERDOLL_INFO_11_equipmentOverrides[]
  name: string
  status: string
  guild: string
  guildRank: string
}
