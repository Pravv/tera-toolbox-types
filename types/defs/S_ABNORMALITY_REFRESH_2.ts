import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_ABNORMALITY_REFRESH_2 extends PacketBase {
  target: bigint
  id: number

  /**
     0x7FFFFFFF = infinite
  */
  duration: bigint
  stacks: number
}
