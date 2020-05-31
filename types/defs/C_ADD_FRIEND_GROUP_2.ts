import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class C_ADD_FRIEND_GROUP_2 extends PacketBase {
  id: number
  name: string

  /**
     playerIds
  */
  friends: number[]
}
