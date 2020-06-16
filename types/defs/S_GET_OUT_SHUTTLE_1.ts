import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_GET_OUT_SHUTTLE_1 extends PacketBase {
  /**
     shuttle gameId
  */
  shuttle: bigint
  gameId: bigint
}
