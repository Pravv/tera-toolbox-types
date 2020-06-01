import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common';  


export class S_NPCGUILD_LIST_2_factions {
  region: number
  faction: number
  rank: number
  reputation: number
  credits: number
}

export class S_NPCGUILD_LIST_2 extends PacketBase {
  gameId: bigint
  factions: S_NPCGUILD_LIST_2_factions[]
}
