import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_DESTROY_GUILD_TOWER_1 extends PacketBase {
  loc: Vec3

  /**
     The guild ID of the player who destroyed the tower
  */
  sourceGuildId: number

  /**
     The guild ID of the tower that got destroyed
  */
  targetGuildId: number

  /**
     The guild name of the player who destroyed the tower
  */
  sourceGuildName: string

  /**
     The name of the player who destroyed the tower
  */
  name: string
}
