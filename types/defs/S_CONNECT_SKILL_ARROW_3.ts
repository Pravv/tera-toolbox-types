// # majorPatchVersion >= 74
import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_CONNECT_SKILL_ARROW_3 extends PacketBase {
  templateId: number

  /**
     0?
  */
  unk1: number
  skill: SkillId

  /**
     1?
  */
  unk2: number
}
