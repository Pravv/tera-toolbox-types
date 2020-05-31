import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class S_INSTANT_PULL_1 extends PacketBase {
  source: bigint
  target: bigint
  loc: Vec3
  w: number
  success: boolean
}
