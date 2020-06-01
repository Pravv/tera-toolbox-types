import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common';  


export class S_TRADE_BROKER_DEAL_INFO_UPDATE_1 extends PacketBase {
  price: bigint
  unk: number
  sellerStage: number
  buyerStage: number
}
