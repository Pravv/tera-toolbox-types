import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  


export class S_GUILD_HISTORY_1_events {
  date: bigint
  event: number
  initiator: string
  description: string
}

export class S_GUILD_HISTORY_1 extends PacketBase {
  page: number
  pages: number
  events: S_GUILD_HISTORY_1_events
}
