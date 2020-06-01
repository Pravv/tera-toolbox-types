import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common';  


export class C_USE_ITEM_3 extends PacketBase {
  gameId: bigint
  id: number
  dbid: bigint
  target: bigint
  amount: number
  dest: Vec3
  loc: Vec3
  w: number
  unk1: number
  unk2: number
  unk3: number
}
