import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_ANSWER_INTERACTIVE_2 extends PacketBase {
  unk: number
  model: number
  level: number

  /**
     false = display Invite to party in tooltip
  */
  hasParty: boolean

  /**
     false = display Invite to guild in tooltip
  */
  hasGuild: boolean
  serverId: number
  name: string
}
