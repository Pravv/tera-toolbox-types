import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class C_SELECT_CHANNEL_1 extends PacketBase {
  unk: number
  zone: number
  channel: number
}
