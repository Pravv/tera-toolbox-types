import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common';  


export class S_SPAWN_EVENT_SEED_2 extends PacketBase {
  owner: bigint
  gameId: bigint
  itemId: number
  loc: Vec3
  state: number
}
