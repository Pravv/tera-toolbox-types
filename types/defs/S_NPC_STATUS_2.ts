// ﻿# majorPatchVersion >= 79
import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_NPC_STATUS_2 extends PacketBase {
  gameId: bigint
  enraged: boolean

  /**
     milliseconds
  */
  remainingEnrageTime: number

  /**
     see S_SPAWN_NPC
  */
  hpLevel: number
  target: bigint

  /**
     see S_SPAWN_NPC
  */
  status: number
}
