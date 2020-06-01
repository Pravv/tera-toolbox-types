import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common';  


export class S_VILLAGE_LIST_TO_TELEPORT_1_locations {
  id: number
  zone: number
  x: number
  y: number
  z: number
}

export class S_VILLAGE_LIST_TO_TELEPORT_1 extends PacketBase {
  locations: S_VILLAGE_LIST_TO_TELEPORT_1_locations
}
