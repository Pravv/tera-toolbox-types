// # majorPatchVersion >= 86
import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  


export class S_REGISTER_ENCHANT_ITEM_3_materials {
  id: number
  amount: number
}

export class S_REGISTER_ENCHANT_ITEM_3_successChances {
  type: number
  chance: number
}

export class S_REGISTER_ENCHANT_ITEM_3 extends PacketBase {
  contractId: number
  uniqueId: bigint
  itemId: number
  enableUpgrade: boolean
  damaged: boolean
  masterwork: boolean
  masterworkBonus: number
  enchantLevel: number
  itemEXP: bigint
  itemEXPMax: bigint
  enchantLevelMax: number
  itemLevel: number
  itemLevelMax: number
  price: bigint
  hideSuccessChance: boolean
  downgradeOnFailureChance: number
  damageOnFailureChance: number
  materials: S_REGISTER_ENCHANT_ITEM_3_materials
  successChances: S_REGISTER_ENCHANT_ITEM_3_successChances
}
