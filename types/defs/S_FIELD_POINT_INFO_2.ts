import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_FIELD_POINT_INFO_2 extends PacketBase {
  points: number
  maxPoints: number

  /**
     Starts from -1 dunno why
  */
  claimed: number

  /**
     Number of guardian quests cleared between last reset and next
  */
  cleared: number
}
