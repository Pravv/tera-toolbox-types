// ﻿# majorPatchVersion >= 81
import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_REQUEST_DESPAWN_SERVANT_1 extends PacketBase {
  gameId: bigint

  /**
     0: leave world, 1: leave visible range
  */
  despawnType: number
}
