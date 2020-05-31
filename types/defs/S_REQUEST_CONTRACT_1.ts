import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class S_REQUEST_CONTRACT_1 extends PacketBase {
  senderId: bigint
  recipientId: bigint
  type: number
  id: number
  unk3: number
  time: number
  senderName: string
  recipientName: string
  data: bytes
}
