import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class S_SYSTEM_MESSAGE_LOOT_ITEM_1 extends PacketBase {
  item: number
  unk1: number
  amount: number
  unk2: number
  unk3: number
  unk4: number
  unk5: number
  unk6: number
  unk7: number
  sysmsg: string
}
