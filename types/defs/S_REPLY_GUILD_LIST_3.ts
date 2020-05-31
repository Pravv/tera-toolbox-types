import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  


export class S_REPLY_GUILD_LIST_3_guilds {
  id: number
  members: number
  howToJoin: number
  playStyle: number
  levelMin: number
  levelMax: number
  name: string
  emblem: string
  ad: string
}

export class S_REPLY_GUILD_LIST_3 extends PacketBase {
  currentPage: number
  totalPages: number
  totalGuilds: number
  guilds: S_REPLY_GUILD_LIST_3_guilds
}
