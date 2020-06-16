import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_START_CHANGE_USER_APPEARANCE_3 extends PacketBase {
  /**
     1 = race, 2 = gender, 3 = appearance
  */
  type: number
  playerId: number
  gender: number
  race: number
  class: number
  weapon: number
  earring1: number
  earring2: number
  chest: number
  gloves: number
  boots: number
  unk0: number
  ring1: number
  ring2: number
  innerwear: number
  appearance: Customize
  unk1: number
  unk2: number
  unk3: number
  unk4: number
  unk5: number
  unk6: number
  unk7: number
  unk8: number
  unk9: number
  unk10: number
  unk11: number
  unk12: number
  unk13: number
  unk14: number
  unk15: number
  unk16: number
  unk17: number
  unk18: number
  unk19: number
  unk20: number
  unk21: number
  unk22: number
  unk23: number

  /**
     0-15
  */
  weaponEnchantment: number

  /**
     100
  */
  unk25: number
  item: number
  details: number[]
  details2: number[]
}
