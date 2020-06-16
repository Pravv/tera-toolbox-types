// # majorPatchVersion >= 93
import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_GACHA_END_2_randomReward {
  id: number
  amount: number
  mailed: boolean
}

export class S_GACHA_END_2_fixedRewards {
  id: number
  amount: number
  mailed: boolean
}

export class S_GACHA_END_2 extends PacketBase {
  randomReward: S_GACHA_END_2_randomReward
  unkn: bigint
  fixedRewards: S_GACHA_END_2_fixedRewards[]
}
