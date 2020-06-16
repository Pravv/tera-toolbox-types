import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_SPAWN_SHUTTLE_3 extends PacketBase {
  gameId: bigint

  /**
     see DynamicGeoData
  */
  id: number
  loc: Vec3
  w: number
}
