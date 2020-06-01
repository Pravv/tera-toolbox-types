// ﻿# majorPatchVersion >= 79
import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_NPC_STATUS_2 extends PacketBase {
  gameId: bigint
  enraged: boolean
  remainingEnrageTime: number
  hpLevel: number
  target: bigint
  status: number
}
