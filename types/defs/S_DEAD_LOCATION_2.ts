import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class S_DEAD_LOCATION_2 extends PacketBase {
  gameId: bigint
  loc: Vec3
}
