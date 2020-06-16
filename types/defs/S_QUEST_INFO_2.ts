import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_QUEST_INFO_2_quests_dialogs {
  loc: Vec3
  huntingZoneId: number
  templateId: number
  zone: number
}

export class S_QUEST_INFO_2_quests {
  id: number
  dbid: number
  step: number

  /**
     1?
  */
  unk2: number

  /**
     0?
  */
  unk3: number

  /**
     1?
  */
  unk4: boolean

  /**
     0?
  */
  unk5: boolean

  /**
     0?
  */
  unk6: boolean
  showTracker: boolean

  /**
     false?
  */
  unk7: boolean
  unk8: boolean
  eligible: boolean

  /**
     0?
  */
  unk9: number

  /**
     0?
  */
  unk10: number

  /**
     0?
  */
  unk11: number
  dialogs: S_QUEST_INFO_2_quests_dialogs[]
  tasks: number[]
}

export class S_QUEST_INFO_2 extends PacketBase {
  quests: S_QUEST_INFO_2_quests[]
}
