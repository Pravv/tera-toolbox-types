// # majorPatchVersion >= 74
import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_SKILL_LIST_2_skills {
  id: bigint
  active: boolean
}

export class S_SKILL_LIST_2 extends PacketBase {
  skills: S_SKILL_LIST_2_skills[]
}
