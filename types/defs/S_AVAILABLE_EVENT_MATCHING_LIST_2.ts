import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common';  


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
  unk1: number
  unk2: number
}

export class S_AVAILABLE_EVENT_MATCHING_LIST_2_quests {
  id: number
  unk1: number
  unk_b1: number
  unk2: number
  unk_b2: number
  unk_b3: number
  unk3: number
  unkArray1: S_AVAILABLE_EVENT_MATCHING_LIST_2_quests_unkArray1
  rewards: S_AVAILABLE_EVENT_MATCHING_LIST_2_quests_rewards
  unkArray2: S_AVAILABLE_EVENT_MATCHING_LIST_2_quests_unkArray2
  unkArray3: S_AVAILABLE_EVENT_MATCHING_LIST_2_quests_unkArray3
  unkArray4: S_AVAILABLE_EVENT_MATCHING_LIST_2_quests_unkArray4
}

export class S_AVAILABLE_EVENT_MATCHING_LIST_2 extends PacketBase {
  unk1: number
  unk2: number
  unk3: number
  unk4: number
  unk5: number
  unk6: number
  unk7: number
  unk8: number
  unk9: number
  unk10: number
  unk11: number
  unk12: number
  unk_b1: number
  unk_b2: number
  unk_b3: number
  unk13: number
  unk14: number
  vanguardCredits: number
  unk_b4: number
  unk_b5: number
  unk_b6: number
  limitAll: number
  limitPvp: number
  limitDungeon: number
  limitSolo: number
  level: number
  quests: S_AVAILABLE_EVENT_MATCHING_LIST_2_quests
}
