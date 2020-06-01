// # majorPatchVersion >= 75
import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_ABNORMALITY_BEGIN_4 extends PacketBase {
  target: bigint
  source: bigint
  id: number
  duration: bigint
  stacks: number
  hitCylinderId: number
  unk3: number
}
