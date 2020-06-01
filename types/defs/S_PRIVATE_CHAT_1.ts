import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common';  


export class S_PRIVATE_CHAT_1 extends PacketBase {
  channel: number
  authorID: bigint
  authorName: string
  message: string
}
