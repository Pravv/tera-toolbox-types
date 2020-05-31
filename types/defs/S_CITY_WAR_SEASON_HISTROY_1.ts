import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  


export class S_CITY_WAR_SEASON_HISTROY_1_seasons {
  unk: number
  season: number
  previousDate: bigint
}

export class S_CITY_WAR_SEASON_HISTROY_1 extends PacketBase {
  seasons: S_CITY_WAR_SEASON_HISTROY_1_seasons
}
