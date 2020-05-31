import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  


export class S_LOAD_TELEPORT_TO_POS_LIST_1_locations {
  unk: number
  zone: number
  x: number
  y: number
  z: number
  name: string
}

export class S_LOAD_TELEPORT_TO_POS_LIST_1 extends PacketBase {
  locations: S_LOAD_TELEPORT_TO_POS_LIST_1_locations
}
