// # majorPatchVersion >= 86
import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


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
  animSeq: S_EACH_SKILL_RESULT_14_reaction_animSeq[]
}

export class S_EACH_SKILL_RESULT_14 extends PacketBase {
  source: bigint

  /**
     If non-zero, then source is a projectile and this is its owner
  */
  owner: bigint
  target: bigint
  templateId: number
  skill: SkillId

  /**
     index in TargetingList (NOT id) - See DataCenter.SkillData
  */
  targeting: number

  /**
     index in AreaList
  */
  area: number
  id: number

  /**
     time in Targeting
  */
  time: number
  value: bigint

  /**
     0 = Hidden, 1 = Damage, 2 = Heal, 3 = MP
  */
  type: number

  /**
     See DataCenter.NocTanEffectData
  */
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

  /**
     0 = default, 1 = physical, 2 = magical
  */
  damageType: number
}
