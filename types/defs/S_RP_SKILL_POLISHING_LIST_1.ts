import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common';  


export class S_RP_SKILL_POLISHING_LIST_1_optionEffects {
  group: number
  id: number
  active: boolean
}

export class S_RP_SKILL_POLISHING_LIST_1_levelEffects {
  group: number
  id: number
}

export class S_RP_SKILL_POLISHING_LIST_1 extends PacketBase {
  optionEffects: S_RP_SKILL_POLISHING_LIST_1_optionEffects[]
  levelEffects: S_RP_SKILL_POLISHING_LIST_1_levelEffects[]
}
