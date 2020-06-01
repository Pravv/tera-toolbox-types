import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common';  


export class S_JOIN_PRIVATE_CHANNEL_2_unk {

}

export class S_JOIN_PRIVATE_CHANNEL_2 extends PacketBase {
  index: number
  channelId: number
  unk: S_JOIN_PRIVATE_CHANNEL_2_unk
  name: string
}
