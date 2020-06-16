import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_USER_EFFECT_1 extends PacketBase {
  /**
     player or other user
  */
  target: bigint

  /**
     npc
  */
  source: bigint

  /**
     2 = main aggro cicle, 3 = secondary aggro cicle
  */
  circle: number

  /**
     1 = apply circle to target, 2 = remove circle from target
  */
  operation: number
}
