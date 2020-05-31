import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  


export class S_GUILD_PERK_LIST_1_skills {
  skill: number
  type: boolean
}

export class S_GUILD_PERK_LIST_1 extends PacketBase {
  guildId: number
  gmId: number
  guildLevel: number
  points: bigint
  guildXp: bigint
  guildXpForLevel: bigint
  guildFunds: bigint
  characters: number
  accounts: number
  size: number
  creationDate: bigint
  guildName: string
  guildMaster: string
  skills: S_GUILD_PERK_LIST_1_skills
}
