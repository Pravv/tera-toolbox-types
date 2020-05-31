import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class C_UNBIND_ITEM_1 extends PacketBase {
  equipement_uid: bigint
  scroll_id: number
}
