import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common';  


export class S_SYSTEM_MESSAGE_LOOT_SPECIAL_ITEM_1 extends PacketBase {
  uniqueId: bigint
  id: number
  amount: number
  sysmsg: string
}
