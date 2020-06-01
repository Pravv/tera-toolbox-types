import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_SPAWN_ME_3 extends PacketBase {
  gameId: bigint
  loc: Vec3
  w: number
  alive: boolean
}
