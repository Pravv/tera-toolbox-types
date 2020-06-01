import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_SHOW_PARTY_MATCH_INFO_1_listings {
  leaderId: number
  isRaid: number
  playerCount: number
  message: string
}

export class S_SHOW_PARTY_MATCH_INFO_1 extends PacketBase {
  pageCurrent: number
  pageCount: number
  listings: S_SHOW_PARTY_MATCH_INFO_1_listings[]
}
