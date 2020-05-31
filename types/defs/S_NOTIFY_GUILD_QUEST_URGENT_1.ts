import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class S_NOTIFY_GUILD_QUEST_URGENT_1 extends PacketBase {
  type: number
  zoneId: number
  templateId: number
}
