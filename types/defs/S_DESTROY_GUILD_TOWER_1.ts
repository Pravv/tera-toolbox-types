import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_DESTROY_GUILD_TOWER_1 extends PacketBase {
  loc: Vec3
  sourceGuildId: number
  targetGuildId: number
  sourceGuildName: string
  name: string
}
