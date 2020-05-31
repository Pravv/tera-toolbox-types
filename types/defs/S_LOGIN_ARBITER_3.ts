import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class S_LOGIN_ARBITER_3 extends PacketBase {
  success: boolean
  loginQueue: boolean
  status: number
  unk: number
  language: number
  pvpDisabled: boolean
  unk1: number
}
