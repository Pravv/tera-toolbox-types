import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class C_JOIN_PRIVATE_CHANNEL_1 extends PacketBase {
  password: number
  name: string
}
