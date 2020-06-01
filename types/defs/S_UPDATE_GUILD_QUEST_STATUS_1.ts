import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common';  


export class S_UPDATE_GUILD_QUEST_STATUS_1_targets {
  info1: number
  info2: number
  completed: number
  total: number
}

export class S_UPDATE_GUILD_QUEST_STATUS_1 extends PacketBase {
  quest: number
  unk1: number
  unk2: number
  targets: S_UPDATE_GUILD_QUEST_STATUS_1_targets
}
