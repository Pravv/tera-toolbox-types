// # majorPatchVersion >= 85
import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common';  


export class S_INVEN_CHANGEDSLOT_1 extends PacketBase {
  pocket: number
  slots: number[]
}
