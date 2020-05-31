import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class S_NOTIFY_TO_FRIENDS_WALK_INTO_SAME_AREA_1 extends PacketBase {
  playerId: number
  worldMapWorldId: number
  campId: number
  worldMapSectionId: number
}
