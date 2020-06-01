// # majorPatchVersion >= 79
import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common';  


export class C_REGISTER_EVOLUTION_ITEM_1 extends PacketBase {
  contract: number
  dbid: bigint
  id: number
}
