// # majorPatchVersion >= 74
import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common';  


export class C_START_SKILL_7 extends PacketBase {
  skill: SkillId
  w: number
  loc: Vec3
  dest: Vec3
  unk: boolean
  moving: boolean
  continue: boolean
  target: bigint
}
