import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  


export class S_COUPON_LIST_1_coupons {
  id: bigint
  received: bigint
  expires: bigint
  remainingSec: bigint
  status: number
  crossServer: boolean
  title: string
}

export class S_COUPON_LIST_1 extends PacketBase {
  page: number
  lastPage: number
  error: boolean
  coupons: S_COUPON_LIST_1_coupons
}
