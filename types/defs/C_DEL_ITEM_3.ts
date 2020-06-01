// # majorPatchVersion >= 85
import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class C_DEL_ITEM_3 extends PacketBase {
  gameId: bigint
  pocket: number
  slot: number
  amount: number
}
