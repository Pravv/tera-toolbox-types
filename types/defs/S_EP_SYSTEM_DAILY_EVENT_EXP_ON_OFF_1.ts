import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_EP_SYSTEM_DAILY_EVENT_EXP_ON_OFF_1 extends PacketBase {
  /**
     0: on, 1: off
  */
  state: number
}
