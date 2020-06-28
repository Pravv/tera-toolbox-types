import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_REQUEST_STYLE_SHOP_MARK_PRODUCTLIST_1_list {
  /**
     0-3
  */
  type: number

  /**
     item, mount, etc.?
  */
  id: number

  /**
     unk4 ? 0x5c49f618 : 0x598bb010
  */
  unk1: number

  /**
     always 0
  */
  unk2: number

  /**
     type == 0 ? 0 : (0, 3000, 5000, 7000, 10000, 15000, 20000, 30000, or 45000)
  */
  unk3: number

  /**
     type == 0 && unk6 == 1 ? (false or true) : false
  */
  unk4: boolean

  /**
     type == 3 ? 30 : 0
  */
  unk5: number

  /**
     type == 0 ? (1 or 2) : 0
  */
  unk6: number

  /**
     unk4 ? '판매불가' (Not Available) : ''
  */
  unk7: string
}

export class S_REQUEST_STYLE_SHOP_MARK_PRODUCTLIST_1 extends PacketBase {
  list: S_REQUEST_STYLE_SHOP_MARK_PRODUCTLIST_1_list[]
}
