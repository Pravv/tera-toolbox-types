import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  


export class S_TRADE_BROKER_REGISTERED_ITEM_LIST_2_listings {
  listing: number
  unk1: number
  uitem: bigint
  item: number
  quantity: number
  unk4: number
  time: bigint
  price: bigint
  unk5: number
  unk6: number
  unk7: number
  unk8: number
}

export class S_TRADE_BROKER_REGISTERED_ITEM_LIST_2 extends PacketBase {
  listings: S_TRADE_BROKER_REGISTERED_ITEM_LIST_2_listings
}
