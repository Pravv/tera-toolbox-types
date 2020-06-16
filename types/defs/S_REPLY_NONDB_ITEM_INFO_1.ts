import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_REPLY_NONDB_ITEM_INFO_1 extends PacketBase {
  item: number

  /**
     always 1, likely ok flag
  */
  unk: number
  unk1: number
  unk2: number
  unk3: number
  unk4: number
  unk5: number
  unk6: number
  unk7: number
}
