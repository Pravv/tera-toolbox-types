import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common';  


export class S_GUILD_NAME_2 extends PacketBase {
  gameId: bigint
  guildName: string
  guildRank: string
  guildTitle: string
  guildLogo: string
}
