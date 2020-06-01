import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common';  


export class S_REQUEST_PRIVATE_CHANNEL_INFO_2_members {
  name: string
}

export class S_REQUEST_PRIVATE_CHANNEL_INFO_2_friends {
  playerId: number
  class: number
  level: number
  group: number
  name: string
}

export class S_REQUEST_PRIVATE_CHANNEL_INFO_2 extends PacketBase {
  owner: boolean
  password: number
  members: S_REQUEST_PRIVATE_CHANNEL_INFO_2_members[]
  friends: S_REQUEST_PRIVATE_CHANNEL_INFO_2_friends[]
}
