import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  


export class S_REQUEST_INGAMESTORE_PRODUCT_DETAIL_1_items {
  unk: number
  item: number
}

export class S_REQUEST_INGAMESTORE_PRODUCT_DETAIL_1 extends PacketBase {
  items: S_REQUEST_INGAMESTORE_PRODUCT_DETAIL_1_items
}
