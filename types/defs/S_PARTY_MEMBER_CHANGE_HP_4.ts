import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common';  


export class S_PARTY_MEMBER_CHANGE_HP_4 extends PacketBase {
  serverId: number
  playerId: number
  currentHp: bigint
  maxHp: bigint
}
