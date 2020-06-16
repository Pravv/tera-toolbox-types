import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_SPAWN_USER_15 extends PacketBase {
  serverId: number
  playerId: number
  gameId: bigint
  loc: Vec3
  w: number
  relation: number
  templateId: number
  huntingZoneId: number
  walkSpeed: number
  runSpeed: number
  actionMode: number
  status: number
  visible: boolean
  alive: boolean
  appearance: Customize
  weapon: number
  body: number
  hand: number
  feet: number
  underwear: number
  head: number
  face: number

  /**
     0 = Enter area, 1 = None
  */
  spawnFx: number
  mount: number

  /**
     See C_PLAYER_LOCATION.type / C_PLAYER_FLYING_LOCATION.type
  */
  pose: number
  title: number
  shuttleId: bigint
  guildLogoId: number
  exarch: boolean
  gm: boolean
  gmInvisible: boolean
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
  pkEnabled: boolean
  level: number
  vehicleEx: bigint
  showFace: boolean
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
  partyServer: number
  partyId: number
  raid: boolean
  showStyle: boolean
  titleCount: bigint
  appearance2: number
  scale: number
  icons: number[]
  accountBenefits: number[]
  name: string
  guildName: string
  guildRank: string
  details: number[]
  guildLogo: string
  shape: number[]
}
