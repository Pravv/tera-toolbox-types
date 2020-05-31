import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  


export class S_POINT_STORE_BASKET_1_basket {
  item: number
}

export class S_POINT_STORE_BASKET_1 extends PacketBase {
  gameId: bigint
  contract: number
  credits: number
  rank: number
  cost: number
  basket: S_POINT_STORE_BASKET_1_basket
}
