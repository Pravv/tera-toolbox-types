import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common';  


export class S_FRIEND_LIST_1_friends {
  id: number
  group: number
  level: number
  race: number
  class: number
  gender: number
  location1: number
  location2: number
  location3: number
  unk1: number
  lastOnline: bigint
  unk2: number
  bonds: number
  name: string
  myNote: string
  theirNote: string
}

export class S_FRIEND_LIST_1 extends PacketBase {
  personalNote: string
  friends: S_FRIEND_LIST_1_friends
}
