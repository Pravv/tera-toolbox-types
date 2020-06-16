import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_ABNORMALITY_FAIL_2 extends PacketBase {
  target: bigint
  id: number

  /**
     0: none specified, 1: cannot apply stronger effect, 2: resisted, 3: immunity
  */
  reason: number
  buff: boolean
}
