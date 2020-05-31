import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  


export class S_VIP_STORE_ITEM_LIST_1_items {
  slot: number
  dbid: number
  available: number
}

export class S_VIP_STORE_ITEM_LIST_1 extends PacketBase {
  contract: number
  credits: bigint
  refreshPoints: number
  refreshTime: number
  items: S_VIP_STORE_ITEM_LIST_1_items
}
