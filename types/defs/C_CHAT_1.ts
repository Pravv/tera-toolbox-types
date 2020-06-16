import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class C_CHAT_1 extends PacketBase {
  /**
     say = 0, party = 1, guild = 2, area = 3, trade = 4, greet = 9,  private = 11-18, p-notice = 21, emote = 26, global = 27, r-notice = 25,  raid = 32, megaphone = 213, guild-adv = 214
  */
  channel: number
  message: string
}
