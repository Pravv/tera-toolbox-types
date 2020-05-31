import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class S_GMEVENT_OX_QUIZ_OPEN_1 extends PacketBase {
  index: number
  count: number
  question: string
}
