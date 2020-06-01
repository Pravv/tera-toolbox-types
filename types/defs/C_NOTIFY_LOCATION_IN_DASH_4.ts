// # majorPatchVersion >= 74
import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common';  


export class C_NOTIFY_LOCATION_IN_DASH_4 extends PacketBase {
  skill: SkillId
  stage: number
  loc: Vec3
}
