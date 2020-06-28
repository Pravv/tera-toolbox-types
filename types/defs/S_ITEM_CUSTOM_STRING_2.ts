import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_ITEM_CUSTOM_STRING_2_customStrings {
  dbid: number
  string: string
}

export class S_ITEM_CUSTOM_STRING_2 extends PacketBase {
  gameId: bigint
  customStrings: S_ITEM_CUSTOM_STRING_2_customStrings[]
}
