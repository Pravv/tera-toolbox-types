import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_CREST_INFO_2_crests {
  id: number
}

export class S_CREST_INFO_2 extends PacketBase {
  points: number
  pointsActive: number
  crests: S_CREST_INFO_2_crests[]
}
