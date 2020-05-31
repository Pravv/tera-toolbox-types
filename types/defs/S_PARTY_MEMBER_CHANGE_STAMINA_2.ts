import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class S_PARTY_MEMBER_CHANGE_STAMINA_2 extends PacketBase {
  serverId: number
  playerId: number
  currentRe: number
  maxRe: number
  unk: number
}
