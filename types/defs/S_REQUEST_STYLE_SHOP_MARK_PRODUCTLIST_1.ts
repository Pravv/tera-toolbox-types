import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_REQUEST_STYLE_SHOP_MARK_PRODUCTLIST_1_list {
  type: number
  id: number
  unk1: number
  unk2: number
  unk3: number
  unk4: boolean
  unk5: number
  unk6: number
}

export class S_REQUEST_STYLE_SHOP_MARK_PRODUCTLIST_1 extends PacketBase {
  list: S_REQUEST_STYLE_SHOP_MARK_PRODUCTLIST_1_list[]
}
