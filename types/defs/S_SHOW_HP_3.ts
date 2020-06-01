import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_SHOW_HP_3 extends PacketBase {
  gameId: bigint
  curHp: bigint
  maxHp: bigint
  enemy: number
  edgeD: number
  edgeF: number
  edgeDuration: number
  unk: number
}
