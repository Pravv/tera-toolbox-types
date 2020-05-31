import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  


export class C_ADD_INTER_PARTY_MATCH_POOL_1_instances {
  id: number
}

export class C_ADD_INTER_PARTY_MATCH_POOL_1_players {
  id: number
  role: number
}

export class C_ADD_INTER_PARTY_MATCH_POOL_1 extends PacketBase {
  unk: number
  preferredLeader: number
  type: number
  instances: C_ADD_INTER_PARTY_MATCH_POOL_1_instances
  players: C_ADD_INTER_PARTY_MATCH_POOL_1_players
}
