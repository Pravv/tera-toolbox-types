import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_CREATURE_CHANGE_HP_6 extends PacketBase {
  /**
     Protocol version 319256 or later
  */
  curHp: bigint
  maxHp: bigint
  diff: bigint
  type: number
  target: bigint
  source: bigint
  crit: number
  abnormId: number
}
