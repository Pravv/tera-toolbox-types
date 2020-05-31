import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class C_COMMIT_ACCESSORY_TRANSFORM_1 extends PacketBase {
  id: number
  dbid: bigint
  scale: number
  rotation: Vec3
  translation: Vec3
}
