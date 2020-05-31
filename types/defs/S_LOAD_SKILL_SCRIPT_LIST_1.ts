import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  


export class S_LOAD_SKILL_SCRIPT_LIST_1_scripts {
  skill: number
  script1: string
  script2: string
  script3: string
  script4: string
}

export class S_LOAD_SKILL_SCRIPT_LIST_1 extends PacketBase {

  /**
     this is used for the greeting skill
  */
  scripts: S_LOAD_SKILL_SCRIPT_LIST_1_scripts
}
