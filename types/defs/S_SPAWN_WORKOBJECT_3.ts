import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common';  


export class S_SPAWN_WORKOBJECT_3 extends PacketBase {
  gameId: bigint
  id: number
  loc: Vec3
  w: number
  status: number
  spawnType: number
}
