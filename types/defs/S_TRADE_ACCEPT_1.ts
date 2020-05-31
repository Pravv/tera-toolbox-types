import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class S_TRADE_ACCEPT_1 extends PacketBase {
  source: bigint
  target: bigint
  contract: number
}
