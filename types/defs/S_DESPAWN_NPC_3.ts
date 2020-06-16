import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_DESPAWN_NPC_3 extends PacketBase {
  gameId: bigint
  loc: Vec3

  /**
     1 = out of view, 5 = dead
  */
  type: number

  /**
     always 0?
  */
  unk: number
}
