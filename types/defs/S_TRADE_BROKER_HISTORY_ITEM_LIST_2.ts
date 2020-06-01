import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common';  


export class S_TRADE_BROKER_HISTORY_ITEM_LIST_2_listings {
  auction: number
  dbid: bigint
  id: number
  amount: number
  enchant: number
  masterwork: boolean
  enigma: number
  ownerId: number
  buyNow: boolean
  time: bigint
  price: bigint
  itemLevel: number
  tier: number
  unk1: number
  unk2: number
  unk3: number
  awakened: boolean
  unk4: number
  name: string
}

export class S_TRADE_BROKER_HISTORY_ITEM_LIST_2 extends PacketBase {
  page: number
  pageCount: number
  listings: S_TRADE_BROKER_HISTORY_ITEM_LIST_2_listings
}
