import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class S_SPAWN_BUILD_OBJECT_2 extends PacketBase {
  gameId: bigint
  itemId: number
  loc: Vec3
  w: number
  unk: number
  ownerName: string
  message: string
}
