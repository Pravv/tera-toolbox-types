import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common';  


export class S_SHOW_PEGASUS_MAP_1_routes {
  id: number
  price: number
  from: number
  to: number
  reqLevel: number
}

export class S_SHOW_PEGASUS_MAP_1 extends PacketBase {
  routes: S_SHOW_PEGASUS_MAP_1_routes[]
}
