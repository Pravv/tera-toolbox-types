import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class C_PLAYER_LOCATION_5 extends PacketBase {
  loc: Vec3
  w: number
  lookDirection: number
  dest: Vec3
  type: number
  jumpDistance: number
  inShuttle: boolean
  time: number
}
