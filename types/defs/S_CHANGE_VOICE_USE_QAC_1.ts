import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_CHANGE_VOICE_USE_QAC_1 extends PacketBase {
  /**
     0 = lowest, 5 = highest
  */
  voice: number
}
