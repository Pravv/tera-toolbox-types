import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_PARTY_MEMBER_BUFF_UPDATE_2_abnormals {
  id: number
  duration: number
  unk: number
  stacks: number
}

export class S_PARTY_MEMBER_BUFF_UPDATE_2_conditions {
  id: number
  duration: number
  status: number
}

export class S_PARTY_MEMBER_BUFF_UPDATE_2 extends PacketBase {
  serverId: number
  playerId: number
  abnormals: S_PARTY_MEMBER_BUFF_UPDATE_2_abnormals[]
  conditions: S_PARTY_MEMBER_BUFF_UPDATE_2_conditions[]
}
