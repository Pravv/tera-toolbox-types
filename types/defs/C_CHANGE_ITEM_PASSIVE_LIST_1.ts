import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  


export class C_CHANGE_ITEM_PASSIVE_LIST_1_stats {
  index: number
  id: number
}

export class C_CHANGE_ITEM_PASSIVE_LIST_1 extends PacketBase {
  unk: number
  stats: C_CHANGE_ITEM_PASSIVE_LIST_1_stats
}
