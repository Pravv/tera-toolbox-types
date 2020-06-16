import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_USER_LOCATION_5 extends PacketBase {
  gameId: bigint
  loc: Vec3
  w: number

  /**
     w direction but while in an action that allows you to look around example: Gunner Blast/Arcane Barrage
  */
  lookDirection: number
  speed: number
  dest: Vec3

  /**
     see C_PLAYER_LOCATION.type
  */
  type: number
  inShuttle: boolean
}
