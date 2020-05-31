// # majorPatchVersion >= 77
import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class S_COLLECTION_PICKSTART_2 extends PacketBase {
  user: bigint
  collection: bigint
  duration: bigint
}
