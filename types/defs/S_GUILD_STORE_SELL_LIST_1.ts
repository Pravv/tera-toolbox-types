import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common';  


export class S_GUILD_STORE_SELL_LIST_1_tabs_items {
  id: number
  netPrice: bigint
}

export class S_GUILD_STORE_SELL_LIST_1_tabs {
  caption: number
  items: S_GUILD_STORE_SELL_LIST_1_tabs_items
}

export class S_GUILD_STORE_SELL_LIST_1 extends PacketBase {
  cid: bigint
  contract: number
  button: number
  funds: bigint
  tabs: S_GUILD_STORE_SELL_LIST_1_tabs
}
