import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  


export class S_COUPON_DATA_1_items {
  id: number
  amount: number
}

export class S_COUPON_DATA_1 extends PacketBase {
  id: bigint
  message: string
  items: S_COUPON_DATA_1_items
}
