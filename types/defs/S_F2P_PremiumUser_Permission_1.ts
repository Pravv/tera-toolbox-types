import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_F2P_PremiumUser_Permission_1_unkArr {
  unk6: number
  unk7: number
}

export class S_F2P_PremiumUser_Permission_1 extends PacketBase {
  unk1: number
  unk2: number

  /**
     80 3F
  */
  unk3: number
  unk4: number

  /**
     80 3F
  */
  unk5: number
  unkArr: S_F2P_PremiumUser_Permission_1_unkArr[]
}
