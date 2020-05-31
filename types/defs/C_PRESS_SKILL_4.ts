// # majorPatchVersion >= 74
import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class C_PRESS_SKILL_4 extends PacketBase {
  skill: SkillId
  press: boolean
  loc: Vec3
}
