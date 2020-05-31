import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  


export class S_ONGOING_FIELD_EVENT_LIST_1_missions {
  zone: number
  id: number
  time: number
}

export class S_ONGOING_FIELD_EVENT_LIST_1 extends PacketBase {
  missions: S_ONGOING_FIELD_EVENT_LIST_1_missions
}
