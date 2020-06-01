import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common';  


export class S_INSTANT_MOVE_3 extends PacketBase {
  gameId: bigint
  loc: Vec3
}
