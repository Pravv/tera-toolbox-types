import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class C_SHOW_ITEM_TOOLTIP_EX_3 extends PacketBase {
  type: number
  id: bigint
  unk1: number
  unk2: number
  unk3: number
  serverId: number
  playerId: number
}
