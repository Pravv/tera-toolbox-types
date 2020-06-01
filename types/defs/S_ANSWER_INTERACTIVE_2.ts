import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common';  


export class S_ANSWER_INTERACTIVE_2 extends PacketBase {
  unk: number
  model: number
  level: number
  hasParty: boolean
  hasGuild: boolean
  serverId: number
  name: string
}
