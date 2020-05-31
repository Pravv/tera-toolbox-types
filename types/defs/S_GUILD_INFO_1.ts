import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  


export class S_GUILD_INFO_1_ranks {
  id: number
  permissions: number
  name: string
}

export class S_GUILD_INFO_1 extends PacketBase {
  id: number
  unk1: number
  unk2: number
  masterId: number
  creationDate: bigint
  level: number
  xp: bigint
  xpForLevel: bigint
  funds: bigint
  unk3: number
  unk4: number
  unk5: number
  unk6: number
  unk7: number
  unk8: number
  characters: number
  accounts: number
  maxAccounts: number
  unk9: number
  unk10: number
  unk11: bigint
  unk12: bigint
  unk13: number
  unk14: number
  playStyle: number
  levelMin: number
  levelMax: number
  unk18: number
  unk19: number
  unk20: number
  name: string
  master: string
  motd: string
  myRank: string
  ad: string
  emblem: string
  ranks: S_GUILD_INFO_1_ranks
}
