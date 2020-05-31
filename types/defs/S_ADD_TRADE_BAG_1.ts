import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class S_ADD_TRADE_BAG_1 extends PacketBase {
  source: bigint
  target: bigint
  contract: number
}
