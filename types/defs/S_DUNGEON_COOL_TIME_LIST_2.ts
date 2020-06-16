// # majorPatchVersion >= 80
import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_DUNGEON_COOL_TIME_LIST_2_dungeons {
  id: number

  /**
     0: regular dungeon, 1: dungeon with phases (e.g. HH), in that case entriesDay indicates the highest cleared phase
  */
  type: number

  /**
     seconds
  */
  cooldown: number

  /**
     -1: no daily limit
  */
  entriesDay: number

  /**
     -1: no weekly limit
  */
  entriesWeek: number
}

export class S_DUNGEON_COOL_TIME_LIST_2_battlegrounds {
  id: number
  entries: number
}

export class S_DUNGEON_COOL_TIME_LIST_2 extends PacketBase {
  dungeons: S_DUNGEON_COOL_TIME_LIST_2_dungeons[]
  battlegrounds: S_DUNGEON_COOL_TIME_LIST_2_battlegrounds[]
}
