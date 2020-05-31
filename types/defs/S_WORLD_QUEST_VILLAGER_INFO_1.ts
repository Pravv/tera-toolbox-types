import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  


export class S_WORLD_QUEST_VILLAGER_INFO_1_npcs {
  unk1: number
  template: number
  huntingZone: number
  x: number
  y: number
  z: number
  zone: number
}

export class S_WORLD_QUEST_VILLAGER_INFO_1 extends PacketBase {
  npcs: S_WORLD_QUEST_VILLAGER_INFO_1_npcs
}
