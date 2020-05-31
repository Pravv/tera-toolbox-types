import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class S_USER_FLYING_LOCATION_2 extends PacketBase {
  gameId: bigint
  type: number
  loc: Vec3
  dest: Vec3
  control: Vec3
  direction: Vec3
  speed: number
}
