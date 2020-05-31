import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  


export class S_ACCOUNT_BENEFIT_LIST_1_accountBenefits {
  packageId: number
  unk1: number
  unk2: number
  timeRemaining: number
  unk3: number
  unk4: number
  unk5: number
}

export class S_ACCOUNT_BENEFIT_LIST_1 extends PacketBase {
  unk: number
  accountBenefits: S_ACCOUNT_BENEFIT_LIST_1_accountBenefits
}
