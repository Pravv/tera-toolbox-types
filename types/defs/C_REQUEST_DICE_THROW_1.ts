import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class C_REQUEST_DICE_THROW_1 extends PacketBase {
  channel: number
  minRoll: number
}
