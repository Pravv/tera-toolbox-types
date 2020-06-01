import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common';  


export class C_GET_IN_SHUTTLE_1 extends PacketBase {
  gameId: bigint
  loc: Vec3
}
