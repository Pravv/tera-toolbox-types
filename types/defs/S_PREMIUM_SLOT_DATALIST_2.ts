// # majorPatchVersion >= 82
import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_PREMIUM_SLOT_DATALIST_2_sets_inventory {
  slot: number
  unk1: number

  /**
     1 = item, 3 = skill
  */
  type: number
  id: number

  /**
     -1 = infinite
  */
  amount: number

  /**
     milliseconds
  */
  cooldown: bigint

  /**
     milliseconds
  */
  cooldownRemaining: bigint
  unk2: boolean
}

export class S_PREMIUM_SLOT_DATALIST_2_sets {
  id: number
  inventory: S_PREMIUM_SLOT_DATALIST_2_sets_inventory[]
}

export class S_PREMIUM_SLOT_DATALIST_2 extends PacketBase {
  sets: S_PREMIUM_SLOT_DATALIST_2_sets[]
}
