import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class S_ACCEPT_CONTRACT_1 extends PacketBase {
  senderId: bigint
  recipientId: bigint
  type: number
  id: number
}
