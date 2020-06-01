import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common';  


export class C_CHECK_VERSION_1_version {
  index: number
  value: number
}

export class C_CHECK_VERSION_1 extends PacketBase {
  version: C_CHECK_VERSION_1_version[]
}
