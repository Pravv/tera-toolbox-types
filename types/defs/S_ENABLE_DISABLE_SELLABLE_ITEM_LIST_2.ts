import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class S_ENABLE_DISABLE_SELLABLE_ITEM_LIST_2 extends PacketBase {
  enabled1: boolean
  enabled2: boolean
  enabled3: boolean
  items1: number[]
  items2: number[]
  items3: number[]
}
