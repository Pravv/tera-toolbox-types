import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  


export class S_GUILD_QUEST_LIST_1_quests_targets {
  info1: number
  info2: number
  completed: number
  total: number
}

export class S_GUILD_QUEST_LIST_1_quests_unk2 {
  unk: number
}

export class S_GUILD_QUEST_LIST_1_quests_rewards {
  item: number
  amount: bigint
}

export class S_GUILD_QUEST_LIST_1_quests {
  id: number
  unk1: number
  size: number
  isRally: number
  totalTime: number
  status: number
  timeRemaining: number
  type: number
  unk7: number
  unk8: number
  name: string
  description: string
  guildName: string
  targets: S_GUILD_QUEST_LIST_1_quests_targets

  /**
     currently completely unknown
  */
  unk2: S_GUILD_QUEST_LIST_1_quests_unk2
  rewards: S_GUILD_QUEST_LIST_1_quests_rewards
}

export class S_GUILD_QUEST_LIST_1 extends PacketBase {
  guildId: number
  guildMasterId: number
  guildLevel: number
  guildXp: bigint
  guildXpForLevel: bigint
  guildFunds: bigint
  characters: number
  accounts: number
  size: number
  creationDate: bigint
  completedQuests: number
  maxQuests: number
  guildName: string
  guildMaster: string
  quests: S_GUILD_QUEST_LIST_1_quests
}
