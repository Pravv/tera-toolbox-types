import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common';  


export class S_LEARN_EP_PERK_1_perks {
  id: number
  level: number
}

export class S_LEARN_EP_PERK_1 extends PacketBase {
  success: boolean
  usedPoints: number
  perks: S_LEARN_EP_PERK_1_perks[]
}
