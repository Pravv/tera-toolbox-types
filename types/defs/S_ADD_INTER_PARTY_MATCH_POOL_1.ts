import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  


export class S_ADD_INTER_PARTY_MATCH_POOL_1_instances {
  id: number
}

export class S_ADD_INTER_PARTY_MATCH_POOL_1_players {
  preferredLeader: number
  role: number
  name: string
}

export class S_ADD_INTER_PARTY_MATCH_POOL_1 extends PacketBase {
  avgWaitSec: number
  type: number
  instances: S_ADD_INTER_PARTY_MATCH_POOL_1_instances
  players: S_ADD_INTER_PARTY_MATCH_POOL_1_players
}
