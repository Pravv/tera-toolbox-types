import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class S_USER_EFFECT_1 extends PacketBase {
  target: bigint
  source: bigint
  circle: number
  operation: number
}
