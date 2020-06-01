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
  projectileSpeed: number
  id: number
  effectScale: number
  moving: boolean
  dest: Vec3
  target: bigint
  animSeq: S_ACTION_STAGE_9_animSeq[]
}
