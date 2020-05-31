import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  


export class S_USER_ITEM_EQUIP_CHANGER_1_equipment {
  slot: number
}

export class S_USER_ITEM_EQUIP_CHANGER_1 extends PacketBase {
  player: bigint
  equipment: S_USER_ITEM_EQUIP_CHANGER_1_equipment
}
