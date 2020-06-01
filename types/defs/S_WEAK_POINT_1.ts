import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common';  


export class S_WEAK_POINT_1 extends PacketBase {
  target: bigint
  runemarksRemoved: number
  runemarksAdded: number
  type: number
  skill: number
}
