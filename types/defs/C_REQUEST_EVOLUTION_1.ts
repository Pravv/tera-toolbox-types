// # majorPatchVersion >= 79
import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class C_REQUEST_EVOLUTION_1 extends PacketBase {
  contract: number
  dbid: bigint
}
