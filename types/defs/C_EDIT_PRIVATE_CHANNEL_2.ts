import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class C_EDIT_PRIVATE_CHANNEL_2 extends PacketBase {
  password: number
  name: string

  /**
     playerIds
  */
  members: number[]
}
