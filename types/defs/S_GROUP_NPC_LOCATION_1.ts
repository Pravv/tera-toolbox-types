import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_GROUP_NPC_LOCATION_1_npcs {
  gameId: bigint
  loc: Vec3
  w: number
  dest: Vec3
  speed: number
}

export class S_GROUP_NPC_LOCATION_1 extends PacketBase {
  type: number
  npcs: S_GROUP_NPC_LOCATION_1_npcs[]
}
