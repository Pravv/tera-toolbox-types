import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class S_GET_USER_GUILD_LOGO_1 extends PacketBase {
  playerId: number
  guildId: number
  logo: bytes
}
