import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_CURRENT_CHANNEL_2 extends PacketBase {
  /**
     If changed, triggers the "Moving to channel X." message
  */
  zone: number

  /**
     ^ See above
  */
  channel: number

  /**
     0 = Low, 1 = Medium, 2 = High
  */
  density: number
}
