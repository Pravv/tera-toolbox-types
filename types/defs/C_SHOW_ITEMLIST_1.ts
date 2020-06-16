// # majorPatchVersion >= 85
import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class C_SHOW_ITEMLIST_1 extends PacketBase {
  gameId: bigint
  container: number
  pocket: number

  /**
     see S_ITEMLIST
  */
  requested: boolean
}
