import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class C_SHOW_ITEM_TOOLTIP_EX_3 extends PacketBase {
  /**
     See S_SHOW_ITEM_TOOLTIP
  */
  type: number
  id: bigint
  unk1: number
  unk2: number
  unk3: number

  /**
     0 on same server
  */
  serverId: number

  /**
     -1 on self
  */
  playerId: number
  owner: string
}
