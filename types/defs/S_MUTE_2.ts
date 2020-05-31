import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class S_MUTE_2 extends PacketBase {
  channel: number
  muted: boolean
}
