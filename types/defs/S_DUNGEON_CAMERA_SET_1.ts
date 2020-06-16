import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_DUNGEON_CAMERA_SET_1 extends PacketBase {
  /**
     used to set the camera distance
  */
  enabled: boolean
  default: number
  max: number
}
