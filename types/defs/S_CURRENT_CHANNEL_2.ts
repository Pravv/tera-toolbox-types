import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_CURRENT_CHANNEL_2 extends PacketBase {
  zone: number
  channel: number
  density: number
}
