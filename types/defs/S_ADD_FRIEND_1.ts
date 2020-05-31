import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class S_ADD_FRIEND_1 extends PacketBase {
  id: number
  level: number
  race: number
  class: number
  gender: number
  location1: number
  location2: number
  location3: number
  unk: number
  name: string
}
