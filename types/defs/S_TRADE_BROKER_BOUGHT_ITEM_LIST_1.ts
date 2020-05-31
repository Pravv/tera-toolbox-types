import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  


export class S_TRADE_BROKER_BOUGHT_ITEM_LIST_1_purchases {
  purchase: number
  unk1: number
  unk2: number
  unk3: number
  item: number
  quantity: number
  enchantlevel: number
  unk4: number
  unk5: number
  unk6: number
  unk7: number
  unk8: number
  unk9: number
  unk10: number
  unk11: number
  unk12: number
  unk13: number
  unk14: number
  time: bigint
  price: bigint
  unk15: number
  unk16: number
  unk17: number
  unk18: number
  unk19: number
  name: string
}

export class S_TRADE_BROKER_BOUGHT_ITEM_LIST_1 extends PacketBase {
  purchases: S_TRADE_BROKER_BOUGHT_ITEM_LIST_1_purchases
}
