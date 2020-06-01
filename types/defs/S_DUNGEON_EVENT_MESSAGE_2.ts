import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_DUNGEON_EVENT_MESSAGE_2 extends PacketBase {
  type: number
  chat: boolean
  channel: number
  message: string
}
