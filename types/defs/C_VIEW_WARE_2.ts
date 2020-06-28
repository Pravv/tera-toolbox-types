import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class C_VIEW_WARE_2 extends PacketBase {
  gameId: bigint

  /**
     See S_VIEW_WARE_EX
  */
  type: number
  offset: number
}
