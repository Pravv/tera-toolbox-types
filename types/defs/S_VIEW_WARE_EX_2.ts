// # majorPatchVersion >= 85
import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common';  


export class S_VIEW_WARE_EX_2_items {
  id: number
  dbid: bigint
  ownerId: bigint
  container: number
  pocket: number
  slot: number
  amountTotal: number
  amount: number
  enchant: number
  durability: number
  soulbound: boolean
  unk: number
  masterwork: boolean
  enigma: number
  enchantAdvantage: number
  enchantBonus: number
  enchantBonusMaxPlus: number
  awakened: boolean
  liberationStatus: number
  crystals: number[]
}

export class S_VIEW_WARE_EX_2 extends PacketBase {
  gameId: bigint
  container: number
  action: number
  offset: number
  maxUsedSlot: number
  numUsedSlots: number
  money: bigint
  numUnlockedSlots: number

  /**
     For details, see S_ITEMLIST
  */
  items: S_VIEW_WARE_EX_2_items[]
}
