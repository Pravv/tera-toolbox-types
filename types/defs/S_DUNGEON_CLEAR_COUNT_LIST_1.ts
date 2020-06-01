import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common';  


export class S_DUNGEON_CLEAR_COUNT_LIST_1_dungeons {
  id: number
  clears: number
  rookie: number
}

export class S_DUNGEON_CLEAR_COUNT_LIST_1 extends PacketBase {
  pid: number
  dungeons: S_DUNGEON_CLEAR_COUNT_LIST_1_dungeons
}
