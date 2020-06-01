import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class C_CHAT_1 extends PacketBase {
  channel: number
  message: string
}
