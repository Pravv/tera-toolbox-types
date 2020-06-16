import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_SKILL_CATEGORY_3 extends PacketBase {
  /**
     Disables or re-enables a specific skill category (skill icon will appear red on hotbar if it matches a disabled category)
  */
  category: number
}
