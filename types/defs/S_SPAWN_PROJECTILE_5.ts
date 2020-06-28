// ﻿# majorPatchVersion >= 74
import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_SPAWN_PROJECTILE_5 extends PacketBase {
  id: bigint
  unk1: number
  skill: SkillId
  loc: Vec3
  dest: Vec3
  moving: boolean
  speed: number
  gameId: bigint
  templateId: number
  unk2: number
  unk3: number
  w: number
}
