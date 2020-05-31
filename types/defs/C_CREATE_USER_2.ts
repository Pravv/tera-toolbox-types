import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class C_CREATE_USER_2 extends PacketBase {
  gender: number
  race: number
  class: number
  appearance: Customize
  isSecondCharacter: boolean
  appearance2: number
  isRandomName: boolean
  name: string
  details: bytes
}
