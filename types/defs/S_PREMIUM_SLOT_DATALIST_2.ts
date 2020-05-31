// # majorPatchVersion >= 82
import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  


export class S_PREMIUM_SLOT_DATALIST_2_sets_inventory {
  slot: number
  unk1: number
  type: number
  id: number
  amount: number
  cooldown: bigint
  cooldownRemaining: bigint
  unk2: boolean
}

export class S_PREMIUM_SLOT_DATALIST_2_sets {
  id: number
  inventory: S_PREMIUM_SLOT_DATALIST_2_sets_inventory
}

export class S_PREMIUM_SLOT_DATALIST_2 extends PacketBase {

  /**
     majorPatchVersion >= 82
  */
  sets: S_PREMIUM_SLOT_DATALIST_2_sets
}
