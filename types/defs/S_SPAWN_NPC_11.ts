// # majorPatchVersion >= 79
import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common';  


export class S_SPAWN_NPC_11_seats {
  id: number
  passengerId: bigint
  pitch: number
  yaw: number
  passengerMaxHp: bigint
  passengerMaxMp: number
  passengerHp: bigint
  passengerMp: number
}

export class S_SPAWN_NPC_11_parts {
  id: number
  curStage: number
  active: boolean
  lastStage: number
}

export class S_SPAWN_NPC_11 extends PacketBase {
  gameId: bigint
  target: bigint
  loc: Vec3
  w: number
  relation: number
  templateId: number
  huntingZoneId: number
  shapeId: number
  walkSpeed: number
  runSpeed: number
  status: number
  mode: number
  remainingEnrageTime: number
  hpLevel: number
  questInfo: number
  visible: boolean
  villager: boolean
  spawnType: number
  replaceId: bigint
  spawnScript: number
  replaceDespawnScript: number
  aggressive: boolean
  owner: bigint
  occupiedByPartyId: bigint
  occupiedByPlayerId: bigint
  bomb: boolean
  bySpawnEvent: boolean
  bgTeam: number
  activeCylinder: number
  repairable: boolean
  flightInteractionType: number
  unkn1: boolean

  /**
     Info seats of vehicle NPCs
  */
  seats: S_SPAWN_NPC_11_seats
  parts: S_SPAWN_NPC_11_parts
  npcName: string
}
