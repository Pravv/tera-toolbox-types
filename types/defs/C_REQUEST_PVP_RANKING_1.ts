import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class C_REQUEST_PVP_RANKING_1 extends PacketBase {
  season: number
  id: number
  class: number
}
