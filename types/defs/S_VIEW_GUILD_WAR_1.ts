import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  


export class S_VIEW_GUILD_WAR_1_battles {
  result: number
  date: bigint
  attackName: string
  attackEmblem: string
  defendName: string
  defendEmblem: string
}

export class S_VIEW_GUILD_WAR_1 extends PacketBase {
  page: number
  maxPages: number
  battles: S_VIEW_GUILD_WAR_1_battles
}
