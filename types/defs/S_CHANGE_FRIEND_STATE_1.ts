import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common';  


export class S_CHANGE_FRIEND_STATE_1 extends PacketBase {
  playerId: number
  state: number
}
