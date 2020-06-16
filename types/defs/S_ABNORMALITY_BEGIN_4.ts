// # majorPatchVersion >= 75
import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_ABNORMALITY_BEGIN_4 extends PacketBase {
  target: bigint
  source: bigint
  id: number

  /**
     0x7FFFFFFF = infinite
  */
  duration: bigint
  stacks: number
  hitCylinderId: number

  /**
     0?
  */
  unk3: number
}
