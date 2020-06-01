// # majorPatchVersion >= 86
import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_PLAYER_CHANGE_EXP_2 extends PacketBase {
  gainedXp: bigint
  totalXp: bigint
  levelXp: bigint
  totalLevelXp: bigint
  monsterGameId: bigint
  partyBonusXp: bigint
  usedRestBonusXp: bigint
  restBonusXp: bigint
  maxRestBonusXp: bigint
  xpBonusPercent: number
  dropBonusPercent: number
  vipBonusXp: bigint
}
