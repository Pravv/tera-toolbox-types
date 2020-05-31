import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class S_CHANGE_RELATION_1 extends PacketBase {
  target: bigint
  relation: number
}
