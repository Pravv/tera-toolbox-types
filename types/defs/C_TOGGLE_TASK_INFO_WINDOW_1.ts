import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class C_TOGGLE_TASK_INFO_WINDOW_1 extends PacketBase {
  uid: number
  group: boolean
  show: number
  unk: number
  type: number
}
