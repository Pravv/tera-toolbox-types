import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common';  


export class S_PARTY_MATCH_LINK_2 extends PacketBase {
  id: number
  unk: number
  raid: number
  unk2: number
  name: string
  message: string
}
