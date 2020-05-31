import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  


export class S_TRADE_BROKER_WAITING_ITEM_LIST_1_listings {
  listing: number
  unk2: number
  unk3: number
  item: number
  quantity: number
  unk5: number
  unk6: number
  unk7: number
  unk8: number
  price: bigint
  buyout: bigint
  offline: number
  unk12: number
  itemLevel: number
  tier: number
  unk15: number
  unk16: number
  unk17: number
  unk18: number
  unk19: number
  unk20: number
  unk21: number
  name: string
}

export class S_TRADE_BROKER_WAITING_ITEM_LIST_1 extends PacketBase {
  page: number
  pageCount: number
  listings: S_TRADE_BROKER_WAITING_ITEM_LIST_1_listings
}
