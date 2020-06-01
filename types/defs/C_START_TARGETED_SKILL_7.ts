// # majorPatchVersion >= 74
import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class C_START_TARGETED_SKILL_7_targets {
  gameId: bigint
  hitCylinderId: number
}

export class C_START_TARGETED_SKILL_7 extends PacketBase {
  skill: SkillId
  loc: Vec3
  w: number
  dest: Vec3
  targets: C_START_TARGETED_SKILL_7_targets[]
}
