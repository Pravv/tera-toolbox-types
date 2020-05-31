import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class S_SKILL_ATTENTION_TARGET_1 extends PacketBase {
  sourceGameId: bigint
  sourceTemplateId: number
  sourceSkillId: SkillId
  sourceSkillStageId: number
  targetGameId: bigint
  targetHitCylinderId: number
}
