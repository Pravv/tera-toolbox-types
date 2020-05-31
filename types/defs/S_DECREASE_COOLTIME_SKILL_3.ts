// # majorPatchVersion >= 74
import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class S_DECREASE_COOLTIME_SKILL_3 extends PacketBase {
  skill: SkillId
  cooldown: number
}
