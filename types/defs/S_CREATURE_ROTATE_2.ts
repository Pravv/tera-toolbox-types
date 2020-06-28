import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_CREATURE_ROTATE_2 extends PacketBase {
  gameId: bigint
  w: number

  /**
     milliseconds until the animation completes
  */
  time: number
}
