// # majorPatchVersion >= 75
import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_END_USER_PROJECTILE_4 extends PacketBase {
  id: bigint

  /**
     true = projectile expired?
  */
  unk1: boolean

  /**
     true = projectile expired or hit a target?
  */
  unk2: boolean
  target: bigint

  /**
     (new)
  */
  unk3: number

  /**
     (new)
  */
  unk4: number
}
