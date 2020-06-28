import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_NOTIFY_GUILD_QUEST_URGENT_1 extends PacketBase {
  /**
     0 = announce, 1 = spawn, 3 = death
  */
  type: number
  zoneId: number
  templateId: number

  /**
     "@GuildQuest:questId" for announce, "\0" for spawn and death
  */
  quest: string
}
