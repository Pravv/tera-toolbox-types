import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_USER_EXTERNAL_CHANGE_7 extends PacketBase {
  gameId: bigint
  weapon: number
  body: number
  hand: number
  feet: number
  underwear: number
  head: number
  face: number
  weaponModel: number
  bodyModel: number
  handModel: number
  feetModel: number

  /**
     ignored
  */
  weaponDye: number
  bodyDye: number
  handDye: number
  feetDye: number
  underwearDye: number
  styleBackDye: number
  styleHeadDye: number
  styleFaceDye: number
  weaponEnchant: number
  styleHead: number
  styleFace: number
  styleBack: number
  styleWeapon: number
  styleBody: number
  styleFootprint: number
  styleHeadScale: number
  styleHeadRotation: Vec3
  styleHeadTranslation: Vec3
  styleHeadTranslationDebug: Vec3
  styleFaceScale: number
  styleFaceRotation: Vec3
  styleFaceTranslation: Vec3
  styleFaceTranslationDebug: Vec3
  styleBackScale: number
  styleBackRotation: Vec3
  styleBackTranslation: Vec3
  styleBackTranslationDebug: Vec3
  usedStyleHeadTransform: boolean
  styleBodyDye: number
  showStyle: boolean
}
