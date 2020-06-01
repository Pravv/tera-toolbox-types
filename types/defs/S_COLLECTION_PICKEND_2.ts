import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_COLLECTION_PICKEND_2 extends PacketBase {
  user: bigint
  collection: bigint
  type: number
}
