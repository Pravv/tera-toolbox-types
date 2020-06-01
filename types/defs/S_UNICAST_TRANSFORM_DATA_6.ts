import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common';  


export class S_UNICAST_TRANSFORM_DATA_6_abnormals {
  id: number
  stacks: number
}

export class S_UNICAST_TRANSFORM_DATA_6 extends PacketBase {
  serverId: number
  playerId: number
  gameId: bigint
  type: number
  isExpandTransform: boolean
  isAppear: boolean
  templateId: number
  huntingZoneId: number
  weaponEnchant: number
  appearance: Customize
  appearance2: number
  weapon: number
  body: number
  hand: number
  feet: number
  underwear: number
  head: number
  face: number
  styleHead: number
  styleFace: number
  styleBack: number
  styleWeapon: number
  styleBody: number
  styleFootprint: number
  weaponModel: number
  bodyModel: number
  handModel: number
  feetModel: number
  weaponDye: number
  bodyDye: number
  handDye: number
  feetDye: number
  underwearDye: number
  styleBackDye: number
  styleHeadDye: number
  styleFaceDye: number
  styleBodyDye: number
  pcbang: boolean
  title: bigint
  bgCommander: boolean
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
  icons: number[]
  abnormals: S_UNICAST_TRANSFORM_DATA_6_abnormals
  details: number[]
  shape: number[]
  guildName: string
  guildLogo: string
  guildRank: string
}
