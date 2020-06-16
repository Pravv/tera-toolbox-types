import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_REQUEST_CITY_WAR_MAP_INFO_1_guilds {
  /**
     0 for myself, 1 for every other guild?
  */
  unk: number
  guildId: number
  kills: number
  deaths: number
  towerHp: number
}

export class S_REQUEST_CITY_WAR_MAP_INFO_1 extends PacketBase {
  /**
     id?
  */
  unk: number

  /**
     state?
  */
  unk2: number

  /**
     in seconds
  */
  timeRemaining: number
  guilds: S_REQUEST_CITY_WAR_MAP_INFO_1_guilds[]
}
