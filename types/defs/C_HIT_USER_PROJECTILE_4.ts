import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  


export class C_HIT_USER_PROJECTILE_4_targets {
  gameId: bigint
}

export class C_HIT_USER_PROJECTILE_4 extends PacketBase {
  id: bigint
  end: boolean
  loc: Vec3
  targets: C_HIT_USER_PROJECTILE_4_targets
}
