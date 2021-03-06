import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class C_TRADE_BROKER_WAITING_ITEM_LIST_NEW_1 extends PacketBase {
  lvlMin: number
  lvlMax: number

  /**
     0 = all, 1 = uncommon, 2 = rare, 3 = superior
  */
  rarity: number
  negotiable: number

  /**
     0 = all, 1 = enigmatic, 2 = identified
  */
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

  /**
     exact phrase
  */
  exact: number

  /**
     always 1?
  */
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
