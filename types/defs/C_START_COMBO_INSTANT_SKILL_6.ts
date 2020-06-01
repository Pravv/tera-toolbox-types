// # majorPatchVersion >= 74 
import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common';  


export class C_START_COMBO_INSTANT_SKILL_6_targets {
  arrowId: number
  gameId: bigint
  hitCylinderId: number
}

export class C_START_COMBO_INSTANT_SKILL_6 extends PacketBase {
  skill: SkillId
  loc: Vec3
  w: number
  targets: C_START_COMBO_INSTANT_SKILL_6_targets
  endpoints: Vec3[]
}
