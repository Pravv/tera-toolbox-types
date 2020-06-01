import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common';  


export class S_LOAD_EP_INFO_1_perks {
  id: number
  level: number
}

export class S_LOAD_EP_INFO_1 extends PacketBase {
  level: number
  exp: bigint
  totalPoints: number
  usedPoints: number
  dailyExp: number
  dailyExpMax: number
  prevLevel: number
  prevTotalPoints: number
  perks: S_LOAD_EP_INFO_1_perks[]
}
