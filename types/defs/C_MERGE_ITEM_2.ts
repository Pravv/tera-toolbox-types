// # majorPatchVersion >= 85
import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common';  


export class C_MERGE_ITEM_2 extends PacketBase {
  pocketFrom: number
  slotFrom: number
  pocketTo: number
  slotTo: number
}
