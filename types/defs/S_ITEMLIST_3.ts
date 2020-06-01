// # majorPatchVersion >= 87
import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common';  


export class S_ITEMLIST_3_items_passivitySets {
  index: number
  masterworkBonus: number
  itemLevel: number
  minItemLevel: number
  maxItemLevel: number
  passivities: number[]
}

export class S_ITEMLIST_3_items {
  id: number
  dbid: bigint
  ownerId: bigint
  slot: number
  amount: number
  enchant: number
  durability: number
  soulboundStatus: number
  passivitySet: number
  extraPassivitySets: number
  remodel: number
  dye: number
  dyeSecRemaining: number
  dyeDate: bigint
  dyeExpiryDate: bigint
  masterwork: boolean
  enigma: number
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
  damaged: boolean
  customString: string
  crystals: number[]
  passivitySets: S_ITEMLIST_3_items_passivitySets
  mergedPassivities: number[]
}

export class S_ITEMLIST_3 extends PacketBase {
  gameId: bigint
  container: number
  pocket: number
  numPockets: number
  size: number
  money: bigint
  lootPriority: number
  open: boolean
  requested: boolean
  first: boolean
  more: boolean
  lastInBatch: boolean
  items: S_ITEMLIST_3_items
}
