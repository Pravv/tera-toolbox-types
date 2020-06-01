import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_USER_LOCATION_IN_ACTION_2 extends PacketBase {
  gameId: bigint
  loc: Vec3
  w: number
}
