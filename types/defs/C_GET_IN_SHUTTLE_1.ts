import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class C_GET_IN_SHUTTLE_1 extends PacketBase {
  /**
     shuttle gameId
  */
  gameId: bigint

  /**
     normal world location
  */
  loc: Vec3

  /**
     relative to shuttles location/space
  */
  shuttleLoc: Vec3
}
