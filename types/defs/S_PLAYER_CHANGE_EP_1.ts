import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class S_PLAYER_CHANGE_EP_1 extends PacketBase {
  expDifference: number
  exp: bigint
  level: number
  dailyExp: number
  dailyExpMax: number
  levelUp: boolean
  totalPoints: number
  baseRev: number
  tsRev: number
}
