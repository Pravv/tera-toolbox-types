import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_PARTY_MATCH_LINK_2 extends PacketBase {
  id: number
  unk: number
  raid: number

  /**
     always 65? Possibly level limit
  */
  unk2: number
  name: string
  message: string
}
