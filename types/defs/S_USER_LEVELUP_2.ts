import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common';  


export class S_USER_LEVELUP_2 extends PacketBase {
  gameId: bigint
  level: number
}
