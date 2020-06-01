import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common';  


export class C_REPLY_THROUGH_ARBITER_CONTRACT_1 extends PacketBase {
  type: number
  id: bigint
  response: number
  recipient: string
}
