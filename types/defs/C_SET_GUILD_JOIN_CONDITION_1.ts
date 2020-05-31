import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class C_SET_GUILD_JOIN_CONDITION_1 extends PacketBase {
  minLevel: number
  maxLevel: number
  join: number
  style: number
}
