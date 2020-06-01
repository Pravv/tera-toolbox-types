import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common';  


export class S_PARTY_MEMBER_CHANGE_MP_2 extends PacketBase {
  serverId: number
  playerId: number
  currentMp: number
  maxMp: number
}
