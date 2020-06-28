import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_INSTANT_DASH_3 extends PacketBase {
  gameId: bigint
  target: bigint

  /**
     always 0?
  */
  unk: number
  loc: Vec3
  w: number
}
