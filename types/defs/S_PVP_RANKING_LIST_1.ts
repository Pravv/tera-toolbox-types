import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  


export class S_PVP_RANKING_LIST_1_players {
  unk: number
  unk2: number
  rank: number
  rating: number
  class: number
  name: string
}

export class S_PVP_RANKING_LIST_1 extends PacketBase {
  players: S_PVP_RANKING_LIST_1_players
}
