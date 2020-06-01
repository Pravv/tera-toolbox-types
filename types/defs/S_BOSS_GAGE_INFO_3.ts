import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_BOSS_GAGE_INFO_3 extends PacketBase {
  id: bigint
  huntingZoneId: number
  templateId: number
  target: bigint
  unk1: number
  unk2: number
  curHp: bigint
  maxHp: bigint
}
