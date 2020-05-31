import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  


export class S_MEDAL_STORE_SELL_LIST_2_tabs_items {
  id: number
}

export class S_MEDAL_STORE_SELL_LIST_2_tabs {
  caption: number
  items: S_MEDAL_STORE_SELL_LIST_2_tabs_items
}

export class S_MEDAL_STORE_SELL_LIST_2 extends PacketBase {
  gameId: bigint
  contract: number
  button: number
  medals: number
  rank: number
  itemId: number
  tabs: S_MEDAL_STORE_SELL_LIST_2_tabs
}
