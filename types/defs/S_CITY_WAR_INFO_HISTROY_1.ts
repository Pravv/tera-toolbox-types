import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  


export class S_CITY_WAR_INFO_HISTROY_1_guilds {
  id: number
  rank: number
  level: number
  size: number
  kills: number
  deaths: number
  towersDestroyed: number
  towerHpPercent: number
  towerTimeKilled: number
  name: string
  gm: string
  emblem: string
}

export class S_CITY_WAR_INFO_HISTROY_1 extends PacketBase {
  winnerId: number
  maxPages: number
  guilds: S_CITY_WAR_INFO_HISTROY_1_guilds
}
