import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_CHANGE_PARTY_MANAGER_2 extends PacketBase {
  serverId: number
  playerId: number
  name: string
}
