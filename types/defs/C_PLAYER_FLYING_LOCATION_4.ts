import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class C_PLAYER_FLYING_LOCATION_4 extends PacketBase {
  type: number
  loc: Vec3
  dest: Vec3
  time: number
  control: Vec3
}
