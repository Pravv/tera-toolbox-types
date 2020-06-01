import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_TRADE_BROKER_DEAL_SUGGESTED_1 extends PacketBase {
  playerId: number
  listing: number
  item: number
  amount: bigint
  sellerPrice: bigint
  offeredPrice: bigint
  name: string
}
