import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_USER_LOCATION_5 extends PacketBase {
  gameId: bigint
  loc: Vec3
  w: number
  lookDirection: number
  speed: number
  dest: Vec3
  type: number
  inShuttle: boolean
}
