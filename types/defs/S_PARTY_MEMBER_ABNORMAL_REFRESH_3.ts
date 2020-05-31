import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class S_PARTY_MEMBER_ABNORMAL_REFRESH_3 extends PacketBase {
  serverId: number
  playerId: number
  id: number
  duration: number
  unk: number
  stacks: number
}
