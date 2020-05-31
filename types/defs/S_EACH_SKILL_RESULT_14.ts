// # majorPatchVersion >= 86
import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  


export class S_EACH_SKILL_RESULT_14_reaction_animSeq {
  duration: number
  xyRate: number
  zRate: number
  distance: number
}

export class S_EACH_SKILL_RESULT_14_reaction {
  enable: boolean
  push: boolean
  air: boolean
  airChain: boolean
  loc: Vec3
  w: number
  skill: SkillId
  stage: number
  id: number
  animSeq: S_EACH_SKILL_RESULT_14_reaction_animSeq
}

export class S_EACH_SKILL_RESULT_14 extends PacketBase {
  source: bigint
  owner: bigint
  target: bigint
  templateId: number
  skill: SkillId
  targeting: number
  area: number
  id: number
  time: number
  value: bigint
  type: number
  noctEffect: number
  crit: boolean
  stackExplode: boolean
  superArmor: boolean
  superArmorId: number
  hitCylinderId: number

  /**
     Used for knockdown, stagger etc.
  */
  reaction: S_EACH_SKILL_RESULT_14_reaction
  damageType: number
}
