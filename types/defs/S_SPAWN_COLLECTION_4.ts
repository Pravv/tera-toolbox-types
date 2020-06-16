import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_SPAWN_COLLECTION_4 extends PacketBase {
  gameId: bigint
  id: number
  amount: number
  loc: Vec3
  w: number
  extractor: boolean
  extractorDisabled: boolean

  /**
     milliseconds remaining
  */
  extractorDisabledTime: number
}
