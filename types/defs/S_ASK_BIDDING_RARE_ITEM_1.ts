import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_ASK_BIDDING_RARE_ITEM_1_unk8 {
  unk: number
}

export class S_ASK_BIDDING_RARE_ITEM_1 extends PacketBase {
  index: number
  unk2: number
  item: number
  unk3: number
  unk4: number
  unk5: number
  duration: number
  unk6: number
  remaining: number
  unk8: S_ASK_BIDDING_RARE_ITEM_1_unk8[]
}
