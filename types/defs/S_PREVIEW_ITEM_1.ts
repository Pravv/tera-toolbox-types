import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_PREVIEW_ITEM_1_items {
  uid: bigint
  item: number
  model: number
  dye: number
  text: string
}

export class S_PREVIEW_ITEM_1 extends PacketBase {
  items: S_PREVIEW_ITEM_1_items[]
}
