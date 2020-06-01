import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class C_WHISPER_1 extends PacketBase {
  target: string
  message: string
}
