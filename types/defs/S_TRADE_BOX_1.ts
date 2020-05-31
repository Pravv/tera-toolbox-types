import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class S_TRADE_BOX_1 extends PacketBase {
  source: bigint
  target: bigint
  contract: number
  sourceLock: number
  sourceGold: bigint
  targetLock: number
  targetGold: bigint
  sourceItems: bytes
}
