// # majorPatchVersion >= 75
import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_START_USER_PROJECTILE_9 extends PacketBase {
  gameId: bigint
  templateId: number

  /**
     0? (new)
  */
  unk1: number
  id: bigint

  /**
     requires type: 0, npc: false (implies huntingZoneId: 0), and reserved: 0
  */
  skill: SkillId
  loc: Vec3
  dest: Vec3
  speed: number
  distance: number
  curve: boolean

  /**
     (same as S_ACTION_STAGE's)
  */
  projectileSpeed: number
}
