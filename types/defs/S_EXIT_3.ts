import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_EXIT_3 extends PacketBase {
  /**
     These are sent to the launcher prior to closing the game
  */
  category: number
  code: number
}
