import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class C_SKILL_LEARN_REQUEST_1 extends PacketBase {
  unk1: number
  skill: number
  type: number
}
