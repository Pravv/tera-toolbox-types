import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  


export class S_FRIEND_GROUP_LIST_1_groups {
  index: number
  name: string
}

export class S_FRIEND_GROUP_LIST_1 extends PacketBase {
  groups: S_FRIEND_GROUP_LIST_1_groups
}
