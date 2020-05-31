import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  


export class S_GUILD_APPLY_LIST_2_apps {
  playerId: number
  class: number
  level: number
  time: bigint
  name: string
}

export class S_GUILD_APPLY_LIST_2 extends PacketBase {
  unk: number
  unk2: number
  unk3: number
  apps: S_GUILD_APPLY_LIST_2_apps
}
