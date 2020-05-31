import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class S_FIELD_POINT_INFO_2 extends PacketBase {
  points: number
  maxPoints: number
  claimed: number
  cleared: number
}
