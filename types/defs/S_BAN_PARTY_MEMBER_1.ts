import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common';  


export class S_BAN_PARTY_MEMBER_1 extends PacketBase {
  serverId: number
  playerId: number
  unk1: number
  name: string
}
