import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class C_STORE_BUY_ADD_BASKET_1 extends PacketBase {
  cid: bigint
  npc: number
  item: number
  quantity: number
}
