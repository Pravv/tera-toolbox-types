import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_ITEM_COLORING_BAG_1 extends PacketBase {
  /**
     40
  */
  unk: number
  unk1: number
  unk2: number
  item: number
  unk3: number

  /**
     apoth 169087
  */
  dye: number
  unk4: bigint
  unk5: bigint
}
