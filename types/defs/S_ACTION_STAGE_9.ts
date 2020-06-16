// ﻿# majorPatchVersion >= 75
import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_ACTION_STAGE_9_animSeq {
  duration: number
  xyRate: number
  zRate: number
}

export class S_ACTION_STAGE_9 extends PacketBase {
  gameId: bigint
  loc: Vec3
  w: number
  templateId: number
  skill: SkillId
  stage: number
  speed: number

  /**
     same as "speed" EXCEPT for a few edge cases
  */
  projectileSpeed: number
  id: number

  /**
     Only applied if corresponding bChangeAbleScaleByRange == true in SkillEffectData
  */
  effectScale: number

  /**
     Only applied if OverrideMovingAnimId > 0 in SkillData
  */
  moving: boolean

  /**
     Used for Brawler: Divine Wrath
  */
  dest: Vec3
  target: bigint
  animSeq: S_ACTION_STAGE_9_animSeq[]
}
