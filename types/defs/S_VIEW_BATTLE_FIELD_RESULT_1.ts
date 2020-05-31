import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  


export class S_VIEW_BATTLE_FIELD_RESULT_1_battlefields {
  id: number
  format: number
  wins: number
  losses: number
  draws: number
  kills: number
  deaths: number
  assists: number
  previousRating: number
  unk2: number
  unk3: number
  destroyed: number
  rating: number
  icon: number
}

export class S_VIEW_BATTLE_FIELD_RESULT_1 extends PacketBase {
  unk: number
  days: number
  battlefields: S_VIEW_BATTLE_FIELD_RESULT_1_battlefields
}
