import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  


export class S_STR_EVALUATE_LIST_1_messages {
  unk: number
  error: number
}

export class S_STR_EVALUATE_LIST_1 extends PacketBase {
  messages: S_STR_EVALUATE_LIST_1_messages
}
