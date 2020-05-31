import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  


export class S_DUNGEON_WORK_POINT_STORE_SELL_LIST_1_tabs_items {
  item: number
  netPrice: number
}

export class S_DUNGEON_WORK_POINT_STORE_SELL_LIST_1_tabs {
  caption: number
  items: S_DUNGEON_WORK_POINT_STORE_SELL_LIST_1_tabs_items
}

export class S_DUNGEON_WORK_POINT_STORE_SELL_LIST_1 extends PacketBase {
  gameId: bigint
  contract: number
  button: number
  credits: number
  rank: number
  store: number
  tabs: S_DUNGEON_WORK_POINT_STORE_SELL_LIST_1_tabs
}
