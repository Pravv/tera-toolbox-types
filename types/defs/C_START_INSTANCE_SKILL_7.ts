// # majorPatchVersion >= 74
import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common';  


export class C_START_INSTANCE_SKILL_7_targets {
  arrowId: number
  gameId: bigint
  hitCylinderId: number
}

export class C_START_INSTANCE_SKILL_7 extends PacketBase {
  skill: SkillId
  loc: Vec3
  w: number
  continue: boolean
  targets: C_START_INSTANCE_SKILL_7_targets[]
  endpoints: Vec3[]
}
