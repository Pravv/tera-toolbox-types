import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_FEARMOVE_STAGE_2 extends PacketBase {
  gameId: bigint
  id: number
  loc: Vec3
  w: number
  speed: number
  dest: Vec3

  /**
     see C_PLAYER_LOCATION.type
  */
  type: number
}
