// ﻿# majorPatchVersion >= 74
import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common';  


export class S_ACTION_END_5 extends PacketBase {
  gameId: bigint
  loc: Vec3
  w: number
  templateId: number
  skill: SkillId
  type: number
}
