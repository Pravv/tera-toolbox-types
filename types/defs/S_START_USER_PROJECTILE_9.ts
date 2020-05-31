// # majorPatchVersion >= 75
import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class S_START_USER_PROJECTILE_9 extends PacketBase {
  gameId: bigint
  templateId: number
  unk1: number
  id: bigint
  skill: SkillId
  loc: Vec3
  dest: Vec3
  speed: number
  distance: number
  curve: boolean
  projectileSpeed: number
}
