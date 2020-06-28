// # majorPatchVersion >= 74
import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class C_CANCEL_SKILL_3 extends PacketBase {
  skill: SkillId
  type: number
}
