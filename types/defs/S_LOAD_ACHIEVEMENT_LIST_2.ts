import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common';  


export class S_LOAD_ACHIEVEMENT_LIST_2_achievements {
  id: number
  completionTime: bigint
}

export class S_LOAD_ACHIEVEMENT_LIST_2_history {
  season: number
  laurel: number
  seasonStartTime: bigint
}

export class S_LOAD_ACHIEVEMENT_LIST_2 extends PacketBase {
  gameId: bigint
  possible: number
  accomplished: number
  laurelPoints: number
  title: number
  achievements: S_LOAD_ACHIEVEMENT_LIST_2_achievements
  history: S_LOAD_ACHIEVEMENT_LIST_2_history
}
