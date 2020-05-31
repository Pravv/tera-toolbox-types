// # majorPatchVersion >= 74
import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  


export class S_INSTANCE_ARROW_4_targets {
  arrowId: number
  gameId: bigint
}

export class S_INSTANCE_ARROW_4 extends PacketBase {
  gameId: bigint
  templateId: number
  skill: SkillId
  actionId: number
  targets: S_INSTANCE_ARROW_4_targets
  endpoints: Vec3[]
}
