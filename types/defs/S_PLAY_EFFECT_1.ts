import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_PLAY_EFFECT_1 extends PacketBase {
  gameId: bigint

  /**
     EffectData.Effect.id
  */
  id: number
}
