// # majorPatchVersion >= 87
import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_SHOW_ITEM_TOOLTIP_14_passivitySets {
  index: number
  masterworkBonus: number
  itemLevel: number
  minItemLevel: number
  maxItemLevel: number
  passivities: number[]
}

export class S_SHOW_ITEM_TOOLTIP_14_statComparison {
  /**
     corresponds with passivity set
  */
  index: number
  stat1: number
  stat2: number
  stat3: number
  stat4: number
  stat5: number
  stat6: number
  stat7: number
  stat8: number
  stat9: number
  stat10: number
  stat11: number
  stat12: number
  stat13: number
  stat14: number
  stat15: number
  unk1: number
  unk2: number
  unk3: number
  unk4: number
  unk5: number
  unk6: number
  unk7: number
  unk8: number

  /**
     0xfefefefe starting from here
  */
  unk9: number
  unk10: number
  unk11: number
  unk12: number
  unk13: number
  unk14: number
  unk15: number
  unk16: number
  unk17: number
  unk18: number
  unk19: number
  unk20: number
  unk21: number
  unk22: number
  unk23: number
  unk24: number
}

export class S_SHOW_ITEM_TOOLTIP_14 extends PacketBase {
  type: number
  dbid: bigint
  id: number

  /**
     always same as dbid?
  */
  dbid2: bigint
  ownerId: bigint

  /**
     0: inventory/pocket, 1: bank, 2: mail, 3: guild bank, 4: homunculus shop, 5: homunculus shop buy, 6: trade broker sale, 7: group duel betting pool, 9: pet bank, 12: wardrobe, 14: equipment
  */
  container: number
  pocket: number
  slot: number
  amountTotal: number
  amount: number
  enchant: number
  durability: number
  soulbound: boolean
  unk3: number
  passivitySet: number
  extraPassivitySets: number
  compareStats: boolean
  etching1: number
  etching2: number
  etching3: number
  etching4: number

  /**
     etchings 5-8 are red in standard tooltips (new etching tooltip displays them as green)
  */
  etching5: number
  etching6: number
  etching7: number
  etching8: number
  etchingSecRemaining1: bigint
  etchingSecRemaining2: bigint
  etchingSecRemaining3: bigint
  etchingSecRemaining4: bigint
  etchingSecRemaining5: bigint
  etchingSecRemaining6: bigint
  etchingSecRemaining7: bigint
  etchingSecRemaining8: bigint
  enigma: number
  masterwork: boolean

  /**
     item level of the item currently equipped at the slot that this item could be equipped to
  */
  currentEquippedItemLevel: number
  remodel: number
  dye: number
  dyeSecRemaining: number

  /**
     not read by the client
  */
  dyeDate: bigint
  dyeExpiryDate: bigint
  acquisitionDate: bigint

  /**
     -1 = display acquisition date instead, -2 = Infinity
  */
  secRemaining: bigint
  setId: number
  setIdForStatComparison: number

  /**
     hidden
  */
  enchantAdvantage: number

  /**
     hidden
  */
  enchantBonus: number

  /**
     hidden
  */
  enchantBonusMaxPlus: number
  averageBrokerPrice: bigint

  /**
     hidden
  */
  feedstock: number

  /**
     hidden
  */
  dismantlePrice: bigint
  xp: bigint
  awakened: boolean

  /**
     See S_INVEN
  */
  liberationStatus: number
  boundToItem: number
  pcbang: boolean
  damaged: boolean
  soulboundName: string
  crystals: number[]
  passivitySets: S_SHOW_ITEM_TOOLTIP_14_passivitySets[]
  statComparison: S_SHOW_ITEM_TOOLTIP_14_statComparison[]
  mergedPassivities: number[]
}
