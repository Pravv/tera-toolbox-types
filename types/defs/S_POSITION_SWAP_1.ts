import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class S_POSITION_SWAP_1 extends PacketBase {
  gameId: bigint
  loc: Vec3
}
