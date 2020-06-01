// # majorPatchVersion >= 86
import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common';  


export class S_REGISTER_EVOLUTION_ITEM_3_materials {
  id: number
  amount: number
}

export class S_REGISTER_EVOLUTION_ITEM_3_successChances {
  type: number
  chance: number
}

export class S_REGISTER_EVOLUTION_ITEM_3 extends PacketBase {
  contractId: number
  sourceUniqueId: bigint
  sourceItemId: number
  resultItemId: number
  resultEnchantLevel: number
  damaged: boolean
  masterwork: boolean
  masterworkBonus: number
  sourceEnchantLevel: number
  itemEXP: bigint
  itemEXPMax: bigint
  sourceItemLevel: number
  sourceItemLevelMax: number
  resultItemLevel: number
  resultItemLevelMax: number
  price: bigint
  hideSuccessChance: boolean
  destroyOnFailureChance: number
  damageOnFailureChance: number
  materials: S_REGISTER_EVOLUTION_ITEM_3_materials[]
  successChances: S_REGISTER_EVOLUTION_ITEM_3_successChances[]
}
