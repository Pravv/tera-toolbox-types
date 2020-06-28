import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class C_UPDATE_REACTION_POS_1 extends PacketBase {
  skill: SkillId
  loc: Vec3
}
