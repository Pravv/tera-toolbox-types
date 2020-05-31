// # majorPatchVersion >= 87
import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  


export class S_SHOW_ITEM_TOOLTIP_14_passivitySets {
  index: number
  masterworkBonus: number
  itemLevel: number
  minItemLevel: number
  maxItemLevel: number
  passivities: number[]
}

export class S_SHOW_ITEM_TOOLTIP_14_statComparison {
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
  dbid2: bigint
  ownerId: bigint
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
  currentEquippedItemLevel: number
  remodel: number
  dye: number
  dyeSecRemaining: number
  dyeDate: bigint
  dyeExpiryDate: bigint
  acquisitionDate: bigint
  secRemaining: bigint
  setId: number
  setIdForStatComparison: number
  enchantAdvantage: number
  enchantBonus: number
  enchantBonusMaxPlus: number
  averageBrokerPrice: bigint
  feedstock: number
  dismantlePrice: bigint
  xp: bigint
  awakened: boolean
  liberationStatus: number
  boundToItem: number
  pcbang: boolean
  damaged: boolean
  soulboundName: string
  crystals: number[]
  passivitySets: S_SHOW_ITEM_TOOLTIP_14_passivitySets
  statComparison: S_SHOW_ITEM_TOOLTIP_14_statComparison
  mergedPassivities: number[]
}
