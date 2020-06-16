import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class C_REVIVE_NOW_2 extends PacketBase {
  /**
     0 = safe haven, 1 = resurrect from healer, 2 = Battleground
  */
  type: number
  id: number
}
