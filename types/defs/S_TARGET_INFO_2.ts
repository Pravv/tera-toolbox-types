// # majorPatchVersion >= 86
import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_TARGET_INFO_2_abnormals {
  id: number

  /**
     0x7FFFFFFF = infinite
  */
  duration: bigint
  stacks: number
}

export class S_TARGET_INFO_2_conditions {
  id: number
  duration: number
  active: boolean
}

export class S_TARGET_INFO_2 extends PacketBase {
  target: bigint
  hpPercentage: number
  mpPercentage: number
  level: number
  itemLevel: number
  stPercentage: number
  edge: number
  edgePercentage: number

  /**
     milliseconds
  */
  edgeTimeRemaining: number
  edgeMin: number
  abnormals: S_TARGET_INFO_2_abnormals[]
  conditions: S_TARGET_INFO_2_conditions[]
}
