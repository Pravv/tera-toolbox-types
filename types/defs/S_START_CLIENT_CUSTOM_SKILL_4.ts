// # majorPatchVersion >= 74
import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common';  


export class S_START_CLIENT_CUSTOM_SKILL_4 extends PacketBase {
  gameId: bigint
  skill: SkillId
}
