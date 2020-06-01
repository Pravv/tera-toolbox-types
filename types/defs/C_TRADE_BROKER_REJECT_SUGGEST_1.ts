import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class C_TRADE_BROKER_REJECT_SUGGEST_1 extends PacketBase {
  playerId: number
  listing: number
}
