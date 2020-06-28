import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_START_CLIMBING_1 extends PacketBase {
  gameId: bigint
  loc: Vec3
  w: number
  dest: Vec3
  isClimbing: boolean
}
