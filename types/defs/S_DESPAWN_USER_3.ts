import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_DESPAWN_USER_3 extends PacketBase {
  gameId: bigint

  /**
     1 = out of view
  */
  type: number
}
