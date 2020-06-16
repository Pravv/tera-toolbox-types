import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_SHOW_PARTY_MATCH_INFO_1_listings {
  /**
     playerId
  */
  leaderId: number
  isRaid: number
  playerCount: number

  /**
     LFG message
  */
  message: string
}

export class S_SHOW_PARTY_MATCH_INFO_1 extends PacketBase {
  /**
     page - 1
  */
  pageCurrent: number

  /**
     pages - 1
  */
  pageCount: number
  listings: S_SHOW_PARTY_MATCH_INFO_1_listings[]
}
