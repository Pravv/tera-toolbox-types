import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class S_BOSS_BATTLE_INFO_1 extends PacketBase {
  id: bigint
  huntingZoneId: number
  templateId: number
  type: number
}
