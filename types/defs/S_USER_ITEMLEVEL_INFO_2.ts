// # majorPatchVersion >= 86
import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class S_USER_ITEMLEVEL_INFO_2 extends PacketBase {
  itemLevelInventory: number
  itemLevel: number
}
