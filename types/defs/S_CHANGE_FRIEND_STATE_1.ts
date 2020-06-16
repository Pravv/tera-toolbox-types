import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_CHANGE_FRIEND_STATE_1 extends PacketBase {
  playerId: number

  /**
     0: online, 1: busy, 2: offline
  */
  state: number
}
