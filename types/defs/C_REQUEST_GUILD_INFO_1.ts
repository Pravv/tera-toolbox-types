import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class C_REQUEST_GUILD_INFO_1 extends PacketBase {
  guildId: number
  type: number
}
