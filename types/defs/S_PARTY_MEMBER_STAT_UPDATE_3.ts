import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_PARTY_MEMBER_STAT_UPDATE_3 extends PacketBase {
  /**
     Region : KR, since near Elin Gunner patch possibly Arsenal patch
  */
  serverId: number
  playerId: number
  curHp: bigint
  curMp: number
  maxHp: bigint
  maxMp: number
  level: number
  inCombat: number
  vitality: number

  /**
     ?
  */
  alive: number

  /**
     120
  */
  stamina: number
  curRe: number
  maxRe: number
}
