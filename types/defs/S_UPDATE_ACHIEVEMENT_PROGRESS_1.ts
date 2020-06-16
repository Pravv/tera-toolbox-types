import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_UPDATE_ACHIEVEMENT_PROGRESS_1_achievements_requirements {
  index: number
  unk: number
  amount: number

  /**
     amount is int64?
  */
  unk2: number
}

export class S_UPDATE_ACHIEVEMENT_PROGRESS_1_achievements {
  id: number
  requirements: S_UPDATE_ACHIEVEMENT_PROGRESS_1_achievements_requirements[]
}

export class S_UPDATE_ACHIEVEMENT_PROGRESS_1 extends PacketBase {
  achievements: S_UPDATE_ACHIEVEMENT_PROGRESS_1_achievements[]
}
