import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class C_DELETE_PARCEL_3 extends PacketBase {
  contract: number
  outbox: boolean
  messages: number[]
}
