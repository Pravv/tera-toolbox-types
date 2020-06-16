import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_FEARMOVE_END_2 extends PacketBase {
  gameId: bigint
  id: number
  loc: Vec3
  w: number
  speed: number

  /**
     see S_ACTION_END.type
  */
  reason: number

  /**
     see C_PLAYER_LOCATION.type
  */
  type: number
}
