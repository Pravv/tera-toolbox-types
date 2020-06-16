// # majorPatchVersion >= 87
import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


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

  /**
     playerId
  */
  ownerId: bigint

  /**
     inventory/pocket slots are counted left to right, top to bottom, starting at 0
  */
  slot: number

  /**
     equipment slots:  0 = Invalid, 1 = Weapon, 3 = Body, 4 = Hands, 5 = Feet, 6 = Left Earring, 7 = Right Earring, 8 = Left Ring, 9 = Right Ring,  10 = Necklace, 11 = Underwear, 12 = Head, 13 = Face, 14 = Costume Head, 15 = Costume Face, 16 = Costume Weapon,  17 = Costume Body, 18 = Costume Back, 19 = Belt, 20 = Brooch, 21 = Footprints, 22 = Halidom, 23 = Relic
  */
  amount: number
  enchant: number

  /**
     only used for homunculi
  */
  durability: number

  /**
     0: not soulbound, 1: soulbound
  */
  soulboundStatus: number
  passivitySet: number
  extraPassivitySets: number
  remodel: number
  dye: number

  /**
     -1 = unlimited
  */
  dyeSecRemaining: number

  /**
     not read by the client
  */
  dyeDate: bigint
  dyeExpiryDate: bigint
  masterwork: boolean
  enigma: number

  /**
     % x 100
  */
  enchantAdvantage: number

  /**
     % x 100 (added to enchantAdvantage + displayed separately)
  */
  enchantBonus: number
  enchantBonusMaxPlus: number

  /**
     playerId
  */
  boundToPlayer: bigint
  awakened: boolean

  /**
     how often this item was liberated
  */
  liberationStatus: number
  feedstock: number
  boundToItem: number
  hasEtching: boolean
  pcbang: boolean
  xp: bigint

  /**
     damaged due to enchant/upgrade failure, needs to be repaired.
  */
  damaged: boolean
  customString: string
  crystals: number[]
  passivitySets: S_ITEMLIST_3_items_passivitySets[]
  mergedPassivities: number[]
}

export class S_ITEMLIST_3 extends PacketBase {
  gameId: bigint

  /**
     0: inventory, 14: equipment - see S_SHOW_ITEM_TOOLTIP
  */
  container: number
  pocket: number
  numPockets: number
  size: number
  money: bigint

  /**
     0: none, 1: fishing & cooking, 2: gathering & crafting, 3: cards
  */
  lootPriority: number
  open: boolean

  /**
     false if sent by server without C_SHOW_ITEMLIST; otherwise same as 'requested' flag in C_SHOW_ITEMLIST
  */
  requested: boolean
  first: boolean
  more: boolean

  /**
     true for all packets of the final (container, pocket) transmitted in a batch; false for the others
  */
  lastInBatch: boolean
  items: S_ITEMLIST_3_items[]
}
