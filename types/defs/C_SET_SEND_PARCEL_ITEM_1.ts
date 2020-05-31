import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class C_SET_SEND_PARCEL_ITEM_1 extends PacketBase {
  contract: number
  dbid: bigint
  id: number
}
