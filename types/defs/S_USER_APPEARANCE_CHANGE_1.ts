import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_USER_APPEARANCE_CHANGE_1 extends PacketBase {
  id: bigint

  /**
     0xA = chest, 0xB = height, 0xC = thighs
  */
  field: number

  /**
     1 = -3, 4 = +0, 7 = +3
  */
  value: number
}
