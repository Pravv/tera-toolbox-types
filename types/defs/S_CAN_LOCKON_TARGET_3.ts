// # majorPatchVersion >= 74
import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_CAN_LOCKON_TARGET_3 extends PacketBase {
  target: bigint
  unk: number
  skill: SkillId
  success: boolean
}
