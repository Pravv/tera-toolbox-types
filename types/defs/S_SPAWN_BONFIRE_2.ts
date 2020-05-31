import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  


export class S_SPAWN_BONFIRE_2_unk {
  unk1: bigint
}

export class S_SPAWN_BONFIRE_2 extends PacketBase {
  gameId: bigint
  id: number
  loc: Vec3
  status: number
  unk: S_SPAWN_BONFIRE_2_unk
}
