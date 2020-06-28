import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_AVAILABLE_EVENT_MATCHING_LIST_2_quests_unkArray1 {
  unk1: number
  unk2: number
}

export class S_AVAILABLE_EVENT_MATCHING_LIST_2_quests_rewards {
  dbid: number
  amount: number
}

export class S_AVAILABLE_EVENT_MATCHING_LIST_2_quests_unkArray2 {

}

export class S_AVAILABLE_EVENT_MATCHING_LIST_2_quests_unkArray3 {

}

export class S_AVAILABLE_EVENT_MATCHING_LIST_2_quests_unkArray4 {
  /**
     0
  */
  unk1: number

  /**
     2400
  */
  unk2: number

  /**
     0
  */
  unk3: number
}

export class S_AVAILABLE_EVENT_MATCHING_LIST_2_quests {
  id: number

  /**
     0
  */
  unk1: number

  /**
     0
  */
  unk_b1: number

  /**
     1
  */
  unk2: number

  /**
     1
  */
  unk_b2: number

  /**
     1
  */
  unk_b3: number

  /**
     0
  */
  unk3: number
  unkArray1: S_AVAILABLE_EVENT_MATCHING_LIST_2_quests_unkArray1[]
  rewards: S_AVAILABLE_EVENT_MATCHING_LIST_2_quests_rewards[]
  unkArray2: S_AVAILABLE_EVENT_MATCHING_LIST_2_quests_unkArray2[]
  unkArray3: S_AVAILABLE_EVENT_MATCHING_LIST_2_quests_unkArray3[]
  unkArray4: S_AVAILABLE_EVENT_MATCHING_LIST_2_quests_unkArray4[]
}

export class S_AVAILABLE_EVENT_MATCHING_LIST_2 extends PacketBase {
  /**
     0
  */
  unk1: number

  /**
     0
  */
  unk2: number

  /**
     0x4ffffff7
  */
  unk3: number

  /**
     16
  */
  unk4: number

  /**
     3
  */
  unk5: number

  /**
     0
  */
  unk6: number

  /**
     13
  */
  unk7: number

  /**
     16
  */
  unk8: number

  /**
     16
  */
  unk9: number

  /**
     8
  */
  unk10: number

  /**
     8
  */
  unk11: number

  /**
     1
  */
  unk12: number

  /**
     1
  */
  unk_b1: number

  /**
     1
  */
  unk_b2: number

  /**
     1
  */
  unk_b3: number

  /**
     53177
  */
  unk13: number

  /**
     139577
  */
  unk14: number
  vanguardCredits: number

  /**
     0
  */
  unk_b4: number

  /**
     0
  */
  unk_b5: number

  /**
     0
  */
  unk_b6: number
  limitAll: number
  limitPvp: number
  limitDungeon: number
  limitSolo: number
  level: number
  quests: S_AVAILABLE_EVENT_MATCHING_LIST_2_quests[]
}
