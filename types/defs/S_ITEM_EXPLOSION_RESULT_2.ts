import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_ITEM_EXPLOSION_RESULT_2 extends PacketBase {
  gameId: bigint
  skill: number
  items: bigint[]
}
