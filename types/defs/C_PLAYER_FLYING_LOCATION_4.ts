import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class C_PLAYER_FLYING_LOCATION_4 extends PacketBase {
  /**
     0 = Hover, 1 = Forward (unused?), 2 = Forward, 3 = Backward, 4 = Boost Forward, 5 = Take Off,
  */
  type: number

  /**
     6 = Ascend, 7 = Descend, 8 = Land
  */
  loc: Vec3
  dest: Vec3

  /**
     Operating System uptime (ms)
  */
  time: number

  /**
     Normalized control facing direction (ignored?)
  */
  control: Vec3
}
