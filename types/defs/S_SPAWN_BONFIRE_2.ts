import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_SPAWN_BONFIRE_2_unk {
  unk1: bigint
}

export class S_SPAWN_BONFIRE_2 extends PacketBase {
  gameId: bigint

  /**
     1,3,11 = normal bonfire, 2 = fire without stand, 6 = santa candle, 8 = blue fire, 9 = purple fire, 10 = flame of sacrifice
  */
  id: number
  loc: Vec3

  /**
     0 = full flame, anything else = embers
  */
  status: number
  unk: S_SPAWN_BONFIRE_2_unk[]
}
