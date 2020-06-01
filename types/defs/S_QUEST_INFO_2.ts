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
  unk2: number
  unk3: number
  unk4: boolean
  unk5: boolean
  unk6: boolean
  showTracker: boolean
  unk7: boolean
  unk8: boolean
  eligible: boolean
  unk9: number
  unk10: number
  unk11: number
  dialogs: S_QUEST_INFO_2_quests_dialogs[]
  tasks: number[]
}

export class S_QUEST_INFO_2 extends PacketBase {
  quests: S_QUEST_INFO_2_quests[]
}
