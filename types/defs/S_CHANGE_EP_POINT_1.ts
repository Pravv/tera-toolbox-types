import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_CHANGE_EP_POINT_1 extends PacketBase {
  totalPoints: number

  /**
     client compares this to 0 and shows the level up animation if it's greater
  */
  gainedPoints: number
}
