import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class S_LEAVE_PARTY_MEMBER_2 extends PacketBase {
  serverId: number
  playerId: number
  name: string
}
