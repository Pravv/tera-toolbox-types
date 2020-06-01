// # majorPatchVersion >= 80
import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common';  


export class S_DUNGEON_COOL_TIME_LIST_2_dungeons {
  id: number
  type: number
  cooldown: number
  entriesDay: number
  entriesWeek: number
}

export class S_DUNGEON_COOL_TIME_LIST_2_battlegrounds {
  id: number
  entries: number
}

export class S_DUNGEON_COOL_TIME_LIST_2 extends PacketBase {

  /**
     majorPatchVersion >= 80
  */
  dungeons: S_DUNGEON_COOL_TIME_LIST_2_dungeons[]
  battlegrounds: S_DUNGEON_COOL_TIME_LIST_2_battlegrounds[]
}
