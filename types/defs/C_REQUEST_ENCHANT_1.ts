import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common';  


export class C_REQUEST_ENCHANT_1 extends PacketBase {
  contract: number
  dbid: bigint
}
