import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class C_TRADE_BROKER_HISTORY_ITEM_LIST_NEW_1 extends PacketBase {
  lvlMin: number
  lvlMax: number
  rarity: number
  idStatus: number
  masterwork: number
  enchantable: number
  itemLvlMin: number
  itemLvlMax: number
  tierMin: number
  tierMax: number
  enchantMin: number
  enchantMax: number
  priceMin: bigint
  priceMax: bigint
  unk1: number
  unk11: number
  exact: number
  unk2: number
  unk3: number
  unk4: number
  unk5: number
  unk6: number
  query: string
  categories: string
  items: string
  query2: string
}
