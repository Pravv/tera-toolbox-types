import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  


export class S_PARTY_MEMBER_CHARM_RESET_2_charms {
  charmId: number
  duration: number
  status: number
}

export class S_PARTY_MEMBER_CHARM_RESET_2 extends PacketBase {
  serverId: number
  playerId: number

  /**
     always empty now?
  */
  charms: S_PARTY_MEMBER_CHARM_RESET_2_charms
}
