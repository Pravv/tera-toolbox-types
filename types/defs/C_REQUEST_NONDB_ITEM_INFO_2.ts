import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class C_REQUEST_NONDB_ITEM_INFO_2 extends PacketBase {
  item: number
  unk1: number
  button: number
}
