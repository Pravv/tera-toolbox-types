import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class S_VISIT_NEW_SECTION_1 extends PacketBase {
  isFirstVisit: boolean
  mapId: number
  guardId: number
  sectionId: number
}
