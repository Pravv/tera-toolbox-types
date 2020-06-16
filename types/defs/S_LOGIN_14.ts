// # majorPatchVersion >= 86
import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_LOGIN_14_servants {
  dbid: bigint
  id: number
  type: number
  energy: number
  slot: number
}

export class S_LOGIN_14 extends PacketBase {
  templateId: number

  /**
     globally-unique identifier for this session
  */
  gameId: bigint
  serverId: number
  playerId: number

  /**
     ?
  */
  actionMode: number
  alive: boolean
  status: number
  walkSpeed: number
  runSpeed: number
  appearance: Customize
  visible: boolean
  isSecondCharacter: boolean
  level: number
  awakeningLevel: number
  profMineral: number
  profBug: number
  profHerb: number
  profEnergy: number
  profPet: number
  pkDeclareCount: number
  pkKillCount: number
  totalXp: bigint
  levelXp: bigint
  totalLevelXp: bigint
  epLevel: number
  epXp: bigint
  epDailyXp: number
  restBonusXp: bigint
  maxRestBonusXp: bigint
  xpBonusPercent: number
  dropBonusPercent: number
  weapon: number
  body: number
  hand: number
  feet: number
  underwear: number
  head: number
  face: number
  serverTime: bigint
  isPkServer: boolean
  chatBanEndTime: bigint

  /**
     achievement id
  */
  title: number
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
  isWorldEventTarget: boolean
  infamy: number
  showFace: boolean
  styleHead: number
  styleFace: number
  styleBack: number
  styleWeapon: number
  styleBody: number
  styleFootprint: number
  styleBodyDye: number
  showStyle: boolean
  titleCount: bigint

  /**
     unknown, but client ignores shape if this is invalid
  */
  appearance2: number
  scale: number
  guildLogoId: number
  name: string
  details: number[]
  shape: number[]

  /**
     see S_REQUEST_SERVANT_INFO_LIST
  */
  servants: S_LOGIN_14_servants[]
}
