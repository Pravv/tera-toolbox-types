import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class S_PARTY_MEMBER_CHARM_ADD_2 extends PacketBase {
  serverId: number
  playerId: number
  id: number
  duration: number
  status: number
}
