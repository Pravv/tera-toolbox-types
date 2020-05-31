import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  


export class S_CHANGE_ITEM_PASSIVE_LIST_1_stats {
  index: number
}

export class S_CHANGE_ITEM_PASSIVE_LIST_1 extends PacketBase {
  success: boolean
  stats: S_CHANGE_ITEM_PASSIVE_LIST_1_stats
}
