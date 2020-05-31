import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class C_TRADE_BROKER_SUGGEST_DEAL_1 extends PacketBase {
  listing: number
  price: bigint
}
