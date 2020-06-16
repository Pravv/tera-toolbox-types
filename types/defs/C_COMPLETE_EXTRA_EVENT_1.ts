import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class C_COMPLETE_EXTRA_EVENT_1 extends PacketBase {
  /**
     1 - daily(both 3x and 8x), 0 - weekly(15x)
  */
  type: number
}
