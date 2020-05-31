// # majorPatchVersion >= 86
import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  


export class S_GET_USER_LIST_17_characters_customStrings {
  id: number
  string: string
}

export class S_GET_USER_LIST_17_characters {
  id: number
  gender: number
  race: number
  class: number
  level: number
  hp: bigint
  mp: number
  worldId: number
  guardId: number
  sectionId: number
  lastLogoutTime: bigint
  isDeleting: boolean
  deleteTime: bigint
  deleteRemainSec: number
  weapon: number
  earring1: number
  earring2: number
  body: number
  hand: number
  feet: number
  unkItem7: number
  ring1: number
  ring2: number
  underwear: number
  head: number
  face: number
  appearance: Customize
  isSecondCharacter: boolean
  adminLevel: number
  isBanned: boolean
  banEndTime: bigint
  banRemainSec: number
  canUseStatus: number
  weaponModel: number
  unkModel2: number
  unkModel3: number
  bodyModel: number
  handModel: number
  feetModel: number
  unkModel7: number
  unkModel8: number
  unkModel9: number
  unkModel10: number
  unkDye1: number
  unkDye2: number
  weaponDye: number
  bodyDye: number
  handDye: number
  feetDye: number
  unkDye7: number
  unkDye8: number
  unkDye9: number
  underwearDye: number
  styleBackDye: number
  styleHeadDye: number
  styleFaceDye: number
  styleHead: number
  styleFace: number
  styleBack: number
  styleWeapon: number
  styleBody: number
  styleFootprint: number
  styleBodyDye: number
  weaponEnchant: number
  restBonusXp: bigint
  maxRestBonusXp: bigint
  showFace: boolean
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
  isNewCharacter: boolean
  tutorialState: number
  showStyle: boolean
  appearance2: number
  achievementPoints: number
  laurel: number
  position: number
  guildLogoId: number
  awakeningLevel: number
  hasBrokerSales: boolean
  name: string
  details: bytes
  shape: bytes
  guildName: string
  customStrings: S_GET_USER_LIST_17_characters_customStrings
}

export class S_GET_USER_LIST_17 extends PacketBase {
  veteran: boolean
  bonusBufSec: number
  maxCharacters: number
  first: boolean
  more: boolean
  leftDelTimeAccountOver: number
  deletionSectionClassifyLevel: number
  deleteCharacterExpireHour1: number
  deleteCharacterExpireHour2: number
  characters: S_GET_USER_LIST_17_characters
}
