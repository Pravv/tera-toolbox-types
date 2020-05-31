import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class S_MOVE_SHUTTLE_1 extends PacketBase {
  gameId: bigint
  from: Vec3
  to: Vec3
  time: number
}
