import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class C_CHANGE_PARTY_MEMBER_AUTHORITY_1 extends PacketBase {
  serverId: number
  playerId: number
  canInvite: boolean
}
