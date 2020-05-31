import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  


export class C_PREVIEW_ITEM_1_items {
  uid: bigint
}

export class C_PREVIEW_ITEM_1 extends PacketBase {
  items: C_PREVIEW_ITEM_1_items
}
