import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_ADD_BLOCKED_USER_2 extends PacketBase {
  id: number
  level: number
  class: number
  name: string
  myNote: string
}
