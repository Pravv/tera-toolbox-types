import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  


export class S_SKILL_PERIOD_2_skillPeriods {
  skill: number
  time: number
  unk3: number
  unk4: number
}

export class S_SKILL_PERIOD_2 extends PacketBase {
  target: bigint
  skillPeriods: S_SKILL_PERIOD_2_skillPeriods
}
