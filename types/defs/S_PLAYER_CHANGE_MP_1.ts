import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_PLAYER_CHANGE_MP_1 extends PacketBase {
  currentMp: number
  maxMp: number
  diff: number

  /**
     0, 1, 3, 4
  */
  type: number
  target: bigint
  source: bigint
}
