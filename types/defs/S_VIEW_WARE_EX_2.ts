// # majorPatchVersion >= 85
import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_VIEW_WARE_EX_2_items {
  id: number
  dbid: bigint
  ownerId: bigint

  /**
     Same as above
  */
  container: number

  /**
     Always 0
  */
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

  /**
     1 = Bank, 3 = Guild Bank, 9 = Pet, 12 = Wardrobe
  */
  container: number

  /**
     Setting this to 1 closes the window. Default: 0
  */
  action: number

  /**
     Slot number of the first (top left) slot. Determines which tab is currently selected
  */
  offset: number

  /**
     Highest occupied slot number. Also determines number of temporary storage tabs available
  */
  maxUsedSlot: number

  /**
     Total number of occupied slots
  */
  numUsedSlots: number
  money: bigint

  /**
     Determines number of unlocked tabs
  */
  numUnlockedSlots: number

  /**
     For details, see S_ITEMLIST
  */
  items: S_VIEW_WARE_EX_2_items[]
}
