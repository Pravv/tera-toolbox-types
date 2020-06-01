// # majorPatchVersion >= 87
import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_INVEN_USERDATA_2 extends PacketBase {
  gameId: bigint
  itemLevelInventory: number
  itemLevel: number
  tcat: bigint
  brokerUseTcat: number
  vipToken: bigint
  boughtInventoryExpansions: number
}
