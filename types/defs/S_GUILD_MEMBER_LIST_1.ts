import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_GUILD_MEMBER_LIST_1_members {
  playerID: number
  unk1: number
  location1: number
  location2: number
  location3: number
  rank: number
  level: number
  race: number
  class: number
  gender: number

  /**
     0 = online, 2 = offline
  */
  status: number
  contributionCurrent: number

  /**
     maybe int64?
  */
  contributionTotal: number
  unk3: number

  /**
     in seconds
  */
  lastOnline: bigint
  name: string
  note: string
}

export class S_GUILD_MEMBER_LIST_1 extends PacketBase {
  guildId: number
  guildMasterId: number
  guildLevel: number
  guildXp: bigint
  guildXpForLevel: bigint
  guildFunds: bigint
  characters: number
  accounts: number

  /**
     0 = small, 1 = medium, 2 = large
  */
  size: number
  creationDate: bigint
  last: number
  first: number
  unk: number
  guildName: string
  guildMaster: string
  members: S_GUILD_MEMBER_LIST_1_members[]
}
