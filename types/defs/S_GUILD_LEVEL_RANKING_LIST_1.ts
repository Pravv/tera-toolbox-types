import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  


export class S_GUILD_LEVEL_RANKING_LIST_1_guilds {
  rank: number
  previousRank: number
  playStyle: number
  dateCreation: bigint
  size: number
  level: number
  emblem: string
  name: string
}

export class S_GUILD_LEVEL_RANKING_LIST_1 extends PacketBase {
  page: number
  maxPage: number
  guilds: S_GUILD_LEVEL_RANKING_LIST_1_guilds
}
