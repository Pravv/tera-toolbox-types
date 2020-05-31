import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  


export class S_ACCOUNT_PACKAGE_LIST_3_accountBenefits {
  packageId: number
  expirationDate: bigint
}

export class S_ACCOUNT_PACKAGE_LIST_3 extends PacketBase {
  accountBenefits: S_ACCOUNT_PACKAGE_LIST_3_accountBenefits
}
