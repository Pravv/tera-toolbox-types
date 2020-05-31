import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  


export class S_LIST_CHANNEL_1_channels {
  channel: number
  density: number
}

export class S_LIST_CHANNEL_1 extends PacketBase {
  unk: number
  zone: number
  channels: S_LIST_CHANNEL_1_channels
}
