import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_LOAD_ACHIEVEMENT_LIST_2_achievements {
  id: number

  /**
     unix timestamp
  */
  completionTime: bigint
}

export class S_LOAD_ACHIEVEMENT_LIST_2_history {
  season: number
  laurel: number

  /**
     unix timestamp
  */
  seasonStartTime: bigint
}

export class S_LOAD_ACHIEVEMENT_LIST_2 extends PacketBase {
  gameId: bigint

  /**
     number of possible achievements; counts inactive ones, but excludes achievements for other classes
  */
  possible: number

  /**
     number of accomplished achievements
  */
  accomplished: number

  /**
     achievement points counting for laurels
  */
  laurelPoints: number

  /**
     active title achievement
  */
  title: number
  achievements: S_LOAD_ACHIEVEMENT_LIST_2_achievements[]
  history: S_LOAD_ACHIEVEMENT_LIST_2_history[]
}
