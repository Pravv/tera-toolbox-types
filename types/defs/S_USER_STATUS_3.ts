import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class S_USER_STATUS_3 extends PacketBase {
  gameId: bigint
  status: number
}
