// # majorPatchVersion >= 82
import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class C_USE_PREMIUM_SLOT_1 extends PacketBase {
  set: number
  slot: number
  type: number
  id: number
}
