// # majorPatchVersion >= 80
import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class S_SPAWN_DROPITEM_8 extends PacketBase {
  gameId: bigint
  loc: Vec3
  item: number
  amount: number
  expiry: number
  explode: boolean
  masterwork: boolean
  enchant: number
  source: bigint
  debug: boolean
  ownerName: string

  /**
     playerIds
  */
  owners: number[]
}
