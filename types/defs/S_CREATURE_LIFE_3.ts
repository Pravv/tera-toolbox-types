// # majorPatchVersion >= 61
import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_CREATURE_LIFE_3 extends PacketBase {
  gameId: bigint
  loc: Vec3
  alive: boolean
  inShuttle: boolean
  resItem: boolean
  resPassive: boolean
}
