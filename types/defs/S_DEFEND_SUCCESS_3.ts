// # majorPatchVersion >= 74
import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_DEFEND_SUCCESS_3 extends PacketBase {
  gameId: bigint

  /**
     the enemy skill being blocked
  */
  skill: SkillId

  /**
     always 0?
  */
  unk4: number

  /**
     brawler perfect blocks
  */
  perfect: boolean
}
