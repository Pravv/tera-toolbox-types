import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common';  


export class S_REQUEST_CITY_WAR_MAP_INFO_1_guilds {
  unk: number
  guildId: number
  kills: number
  deaths: number
  towerHp: number
}

export class S_REQUEST_CITY_WAR_MAP_INFO_1 extends PacketBase {
  unk: number
  unk2: number
  timeRemaining: number
  guilds: S_REQUEST_CITY_WAR_MAP_INFO_1_guilds[]
}
