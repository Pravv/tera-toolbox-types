import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  


export class C_STR_EVALUATE_LIST_1_messages {
  unk: number
  message: string
}

export class C_STR_EVALUATE_LIST_1 extends PacketBase {
  unk: number
  messages: C_STR_EVALUATE_LIST_1_messages
}
