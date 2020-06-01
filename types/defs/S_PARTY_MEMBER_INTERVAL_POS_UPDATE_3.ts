import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common';  


export class S_PARTY_MEMBER_INTERVAL_POS_UPDATE_3 extends PacketBase {
  serverId: number
  playerId: number
  loc: Vec3
  zone: number
  unk: number
}
