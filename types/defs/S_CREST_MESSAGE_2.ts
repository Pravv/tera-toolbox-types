import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_CREST_MESSAGE_2 extends PacketBase {
  /**
     0?
  */
  unk: number

  /**
     6 for resets?
  */
  type: number
  skill: number
}
