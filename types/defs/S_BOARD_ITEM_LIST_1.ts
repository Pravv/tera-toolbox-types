import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  


export class S_BOARD_ITEM_LIST_1_messages {
  time: bigint
  author: string
  message: string
}

export class S_BOARD_ITEM_LIST_1 extends PacketBase {
  id: number
  messages: S_BOARD_ITEM_LIST_1_messages
}
