import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_PRIVATE_CHANNEL_NOTICE_2 extends PacketBase {
  channelId: number
  event: number
  name: string
}
