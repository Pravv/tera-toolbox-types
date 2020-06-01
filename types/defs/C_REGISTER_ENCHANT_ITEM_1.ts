import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common';  


export class C_REGISTER_ENCHANT_ITEM_1 extends PacketBase {
  contract: number
  dbid: bigint
}
