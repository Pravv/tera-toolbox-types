// # majorPatchVersion >= 93
import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_ABNORMALITY_TOOLTIP_VALUE_1_values {
  /**
     effect type from DC
  */
  type: number
  value: number
}

export class S_ABNORMALITY_TOOLTIP_VALUE_1 extends PacketBase {
  gameId: bigint
  id: number
  values: S_ABNORMALITY_TOOLTIP_VALUE_1_values[]
}
