import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_REQUEST_CITY_WAR_MAP_INFO_DETAIL_1_guilds {
  id: number
  name: string
  gm: string
  logo: string
}

export class S_REQUEST_CITY_WAR_MAP_INFO_DETAIL_1 extends PacketBase {
  guilds: S_REQUEST_CITY_WAR_MAP_INFO_DETAIL_1_guilds[]
}
