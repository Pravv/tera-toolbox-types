import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class C_TRADE_BROKER_REGISTER_ITEM_1 extends PacketBase {
  uid: bigint
  item: number
  quantity: number
  price: bigint
  unk1: bigint
}
