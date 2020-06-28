import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_USER_WEAPON_APPEARANCE_CHANGE_2 extends PacketBase {
  gameId: bigint
  weapon: number
  unk1: number
  weaponEnchant: number
  styleWeapon: number

  /**
     false = ignore styleWeapon?
  */
  unk2: boolean

  /**
     329 = Set default animation to "Wait" and ignore styleWeapon
  */
  abnormalityEffect: number
}
