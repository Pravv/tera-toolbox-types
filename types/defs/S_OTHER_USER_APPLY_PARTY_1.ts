import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class S_OTHER_USER_APPLY_PARTY_1 extends PacketBase {
  unk1: number
  pid: number
  class: number
  race: number
  gender: number
  level: number
  unk2: number
  name: string
}
