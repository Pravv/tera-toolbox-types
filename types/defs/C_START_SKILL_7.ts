// # majorPatchVersion >= 74
import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class C_START_SKILL_7 extends PacketBase {
  skill: SkillId
  w: number
  loc: Vec3
  dest: Vec3

  /**
     Always true?
  */
  unk: boolean
  moving: boolean

  /**
     true if the previous skill should not trigger S_ACTION_END for the previous skill
  */
  continue: boolean

  /**
     (ex. charging skills, Ninja's Impact Bomb interrupting another skill)
  */
  target: bigint
  unk2: boolean
}
