import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class S_INVITE_FRIEND_CODE_2 extends PacketBase {
  numRecruits: number
  maxRecruits: number
  code: string
  recruits: string[]
}
