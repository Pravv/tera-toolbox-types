// # majorPatchVersion >= 88
import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common';  


export class S_REQUEST_SPAWN_SERVANT_4_abilities {
  id: number
  active: boolean
}

export class S_REQUEST_SPAWN_SERVANT_4 extends PacketBase {
  gameId: bigint
  dbid: bigint
  loc: Vec3
  w: number
  type: number
  id: number
  linkedNpcTemplateId: number
  linkedNpcHuntingZoneId: number
  walkSpeed: number
  runSpeed: number
  ownerId: bigint
  energy: number
  energyMax: number
  spawnType: number
  level: number
  fellowship: number
  styleItem: number
  restyleId: number
  giftedSkills: number[]
  abilities: S_REQUEST_SPAWN_SERVANT_4_abilities
  name: string
}
