import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class S_UPDATE_GUILD_MEMBER_1 extends PacketBase {
  playerID: number
  location1: number
  location2: number
  location3: number
  rank: number
  level: number
  race: number
  class: number
  status: number
  gender: number
  lastOnline: bigint
  unk3: number
  unk4: number
  name: string
}
