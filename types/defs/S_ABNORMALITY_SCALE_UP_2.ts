import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_ABNORMALITY_SCALE_UP_2 extends PacketBase {
  /**
     Sets entity scale multiplier from abnormalities
  */
  gameId: bigint
  scale: number

  /**
     in milliseconds
  */
  duration: number
}
