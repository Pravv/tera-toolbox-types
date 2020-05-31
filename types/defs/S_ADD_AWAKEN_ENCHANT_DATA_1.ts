import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  


export class S_ADD_AWAKEN_ENCHANT_DATA_1_costs {
  id: number
  enchantLevel: number
  tier: number
  type: number
  alkahestItemId: number
  alkahestAmount: number
  feedstockAmount: number
}

export class S_ADD_AWAKEN_ENCHANT_DATA_1 extends PacketBase {
  costs: S_ADD_AWAKEN_ENCHANT_DATA_1_costs
}
