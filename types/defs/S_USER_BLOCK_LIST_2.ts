import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_USER_BLOCK_LIST_2_blockList {
  id: number
  level: number
  class: number
  name: string
  myNote: string
}

export class S_USER_BLOCK_LIST_2 extends PacketBase {
  blockList: S_USER_BLOCK_LIST_2_blockList[]
}
