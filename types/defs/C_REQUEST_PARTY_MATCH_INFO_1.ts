import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class C_REQUEST_PARTY_MATCH_INFO_1 extends PacketBase {
  /**
     0
  */
  unk1: number
  minlvl: number
  maxlvl: number

  /**
     3
  */
  unk2: number

  /**
     0
  */
  unk3: number
  purpose: string
}
