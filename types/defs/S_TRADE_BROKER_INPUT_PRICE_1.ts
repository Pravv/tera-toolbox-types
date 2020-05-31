import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class S_TRADE_BROKER_INPUT_PRICE_1 extends PacketBase {
  minPrice: bigint
  avgPrice: bigint
  unk1: bigint
  unk2: bigint
  unk3: bigint
}
