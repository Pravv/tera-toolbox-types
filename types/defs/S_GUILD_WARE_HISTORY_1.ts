import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  


export class S_GUILD_WARE_HISTORY_1_events {
  unk1: bigint
  date: bigint
  event: number
  item: number
  unk2: bigint
  amount: number
  unk3: number
  unk4: number
  name: string
}

export class S_GUILD_WARE_HISTORY_1 extends PacketBase {
  page: number
  pages: number
  events: S_GUILD_WARE_HISTORY_1_events
}
