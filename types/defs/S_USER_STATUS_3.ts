import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_USER_STATUS_3 extends PacketBase {
  gameId: bigint

  /**
     0 = normal, 1 = in combat, 2 = campfire, 3 = on pegasus
  */
  status: number
}
