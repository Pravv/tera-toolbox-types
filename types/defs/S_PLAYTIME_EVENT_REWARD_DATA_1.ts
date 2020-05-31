import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  


export class S_PLAYTIME_EVENT_REWARD_DATA_1_items {
  row: number
  timeRequired: number
  column: number
  itemId: number
  quantity: number
  unk2: number
  redeemable: number
  redeemed: number
}

export class S_PLAYTIME_EVENT_REWARD_DATA_1 extends PacketBase {
  unk1: number
  items: S_PLAYTIME_EVENT_REWARD_DATA_1_items
}
