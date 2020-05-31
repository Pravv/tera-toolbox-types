import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class S_READY_PULL_1 extends PacketBase {
  source: bigint
  target: bigint
  success: boolean
}
