// # majorPatchVersion >= 85
import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class C_PUT_WARE_ITEM_3 extends PacketBase {
  gameId: bigint
  container: number
  offset: number

  /**
     Used only when depositing money
  */
  money: bigint

  /**
     Used only when depositing items
  */
  fromPocket: number
  fromSlot: number
  id: number
  dbid: bigint
  amount: number
  toSlot: number
}
