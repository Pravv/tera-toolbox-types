import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_SUCCESS_COUNTER_1 extends PacketBase {
  source: bigint
  target: bigint
  skill: number
}
