// # majorPatchVersion >= 74
import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class C_START_INSTANCE_SKILL_EX_5 extends PacketBase {
  skill: SkillId
  projectile: bigint
  loc: Vec3
  dest: Vec3
  w: number
}
