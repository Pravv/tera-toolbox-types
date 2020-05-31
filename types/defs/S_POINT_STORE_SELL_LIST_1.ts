import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  


export class S_POINT_STORE_SELL_LIST_1_tabs_items {
  id: number
  netPrice: number
  reqRank: number
}

export class S_POINT_STORE_SELL_LIST_1_tabs {
  caption: number
  items: S_POINT_STORE_SELL_LIST_1_tabs_items
}

export class S_POINT_STORE_SELL_LIST_1 extends PacketBase {
  cid: bigint
  contract: number
  button: number
  tokens: number
  rank: number
  faction: number
  tabs: S_POINT_STORE_SELL_LIST_1_tabs
}
