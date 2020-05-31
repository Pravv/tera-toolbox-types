// # majorPatchVersion >= 74
import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class S_CONNECT_SKILL_ARROW_3 extends PacketBase {
  templateId: number
  unk1: number
  skill: SkillId
  unk2: number
}
