import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_DUNGEON_EVENT_MESSAGE_2 extends PacketBase {
  /**
     2,19-23,38-39,41-74,80-81
  */
  type: number

  /**
     show in chat
  */
  chat: boolean

  /**
     see C_CHAT.1.def
  */
  channel: number
  message: string
}
