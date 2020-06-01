import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_NPC_OCCUPIER_INFO_1 extends PacketBase {
  npc: bigint
  pid: bigint
  cid: bigint
}
