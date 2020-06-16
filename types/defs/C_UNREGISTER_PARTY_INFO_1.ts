import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class C_UNREGISTER_PARTY_INFO_1 extends PacketBase {
  /**
     20?
  */
  unk1: number
  minLevel: number
  maxLevel: number

  /**
     3?
  */
  unk3: number

  /**
     0?
  */
  unk4: number

  /**
     0?
  */
  unk5: number

  /**
     0?
  */
  unk6: number
}
