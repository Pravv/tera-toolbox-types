import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  


export class S_TELEPORT_TO_CAMP_1_destinations {
  id: number
  x: number
  y: number
  z: number
  price: bigint
  available: boolean
}

export class S_TELEPORT_TO_CAMP_1 extends PacketBase {
  x: number
  y: number
  z: number
  unk1: number
  unk2: boolean
  destinations: S_TELEPORT_TO_CAMP_1_destinations
}
