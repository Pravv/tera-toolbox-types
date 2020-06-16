import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_CHANGE_EVENT_MATCHING_STATE_2_matchingEvents {
  event: number
}

export class S_CHANGE_EVENT_MATCHING_STATE_2 extends PacketBase {
  searching: boolean

  /**
     false for BG, true for dungeon
  */
  dungeon: boolean
  matchingEvents: S_CHANGE_EVENT_MATCHING_STATE_2_matchingEvents[]
}
