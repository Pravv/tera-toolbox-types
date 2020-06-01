import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_DIALOG_3_specialActionButton {
  enabled: boolean
  type: number
}

export class S_DIALOG_3_buttons {
  id: number
  index: number
  type: number
  text: string
}

export class S_DIALOG_3_questRewards_faction {
  id: number
  reputation: number
  tokens: number
}

export class S_DIALOG_3_questRewards_items {
  id: number
  amount: number
}

export class S_DIALOG_3_questRewards_skills {
  id: number
  active: boolean
}

export class S_DIALOG_3_questRewards {
  mode: number
  type: number
  exp: bigint
  money: bigint
  policyPoints: number
  faction: S_DIALOG_3_questRewards_faction
  skillAdvancementExp: number
  items: S_DIALOG_3_questRewards_items[]
  skills: S_DIALOG_3_questRewards_skills[]
}

export class S_DIALOG_3 extends PacketBase {
  gameId: bigint
  type: number
  key1: number
  key2: number
  questTaskId: number
  textId: number
  id: number
  specialActionButton: S_DIALOG_3_specialActionButton
  autoClose: boolean
  unspecifiedReward: boolean
  additionalReward: boolean
  repeatedQuestExtraMoney: number
  repeatableQuestTask: boolean
  maxRepeatCount: number
  additionalRewardEvent: boolean
  buttons: S_DIALOG_3_buttons[]
  questRewards: S_DIALOG_3_questRewards[]
}
