import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  


export class S_SKILL_LEARN_LIST_1_skillList_requiredSkills {
  skill: number
  type: number
}

export class S_SKILL_LEARN_LIST_1_skillList {
  unk1: number
  skill: number
  type: number
  price: number
  level: number
  learned: number
  requiredSkills: S_SKILL_LEARN_LIST_1_skillList_requiredSkills
}

export class S_SKILL_LEARN_LIST_1 extends PacketBase {
  skillList: S_SKILL_LEARN_LIST_1_skillList
}
