// # majorPatchVersion >= 74
import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_START_INVERSE_CAPTURE_4 extends PacketBase {
  source: bigint
  target: bigint

  /**
     same as C_START_TARGETED_SKILL's unk
  */
  unk: number
  skill: SkillId
  loc: Vec3
  success: boolean
}
