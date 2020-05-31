import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class S_PUSHED_BY_SHIELD_1 extends PacketBase {
  source: bigint
  target: bigint
  loc: Vec3
}
