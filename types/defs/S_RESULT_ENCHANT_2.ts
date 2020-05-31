// # majorPatchVersion >= 79
import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class S_RESULT_ENCHANT_2 extends PacketBase {
  contract: number
  result: number
  dbid: bigint
  id: number
}
