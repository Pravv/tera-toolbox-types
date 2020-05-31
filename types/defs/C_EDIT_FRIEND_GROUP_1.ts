import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  


export class C_EDIT_FRIEND_GROUP_1_friends {
  playerId: number
  id: number
}

export class C_EDIT_FRIEND_GROUP_1 extends PacketBase {
  id: number
  name: string
  friends: C_EDIT_FRIEND_GROUP_1_friends
}
