import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_NPC_LOCATION_3 extends PacketBase {
  gameId: bigint
  loc: Vec3
  w: number
  speed: number
  dest: Vec3

  /**
     see C_PLAYER_LOCATION.type
  */
  type: number
}
