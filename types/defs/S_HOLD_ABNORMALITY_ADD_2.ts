import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_HOLD_ABNORMALITY_ADD_2 extends PacketBase {
  index: number
  id: number
  duration: bigint
  stacks: number
}
