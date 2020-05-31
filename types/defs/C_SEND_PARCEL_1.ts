import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class C_SEND_PARCEL_1 extends PacketBase {
  contract: number
  to: string
  title: string
}
