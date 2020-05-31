import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class S_BATTLE_FIELD_SCORE_1 extends PacketBase {
  enemyScore: number
  score: number
  maxScore: number
  roundTime: number
}
