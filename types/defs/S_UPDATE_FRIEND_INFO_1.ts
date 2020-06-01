import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_UPDATE_FRIEND_INFO_1_friends {
  id: number
  level: number
  race: number
  class: number
  gender: number
  status: number
  location1: number
  location2: number
  location3: number
  unk4: number
  unk5: number
  lastOnline: bigint
  name: string
}

export class S_UPDATE_FRIEND_INFO_1 extends PacketBase {
  friends: S_UPDATE_FRIEND_INFO_1_friends[]
}
