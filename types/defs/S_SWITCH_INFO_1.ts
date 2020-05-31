import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class S_SWITCH_INFO_1 extends PacketBase {
  onSkill: number
  offSkill: number
  enabled: boolean
}
