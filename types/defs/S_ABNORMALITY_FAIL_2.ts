import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common';  


export class S_ABNORMALITY_FAIL_2 extends PacketBase {
  target: bigint
  id: number
  reason: number
  buff: boolean
}
