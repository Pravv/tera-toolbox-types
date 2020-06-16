// # majorPatchVersion >= 79
import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


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

  /**
     0: idle/normal, 1: alert, 2: combat, 3: evade/leash, 4: dead
  */
  status: number

  /**
     0: normal, 1: enraged
  */
  mode: number

  /**
     milliseconds
  */
  remainingEnrageTime: number

  /**
     0: 0% <= hp < 20%, 1: 20% <= hp < 40%, 2: 40% <= hp < 60%, 3: 60% <= hp < 80%, 4: 80% <= hp < 100%, 5: 100% hp
  */
  hpLevel: number

  /**
     same as in S_QUEST_VILLAGER_INFO
  */
  questInfo: number
  visible: boolean
  villager: boolean
  spawnType: number

  /**
     despawns old NPC and spawns self, used for NPC transformation skills
  */
  replaceId: bigint

  /**
     ActionScriptID (run on self during spawn)
  */
  spawnScript: number

  /**
     ActionScript (run on replaceId during despawn)
  */
  replaceDespawnScript: number
  aggressive: boolean
  owner: bigint
  occupiedByPartyId: bigint
  occupiedByPlayerId: bigint

  /**
     seems to be true only for those bomb NPCs in BGs
  */
  bomb: boolean

  /**
     seems to be true only for NPCs spawned by special spawn events (that are not regularly spawned)
  */
  bySpawnEvent: boolean

  /**
     used only for some NPCs in kumas BG
  */
  bgTeam: number
  activeCylinder: number

  /**
     used to mark repairable vehicle NPCs. Also seems to disable special NPC markers (effects above the heads of merchants, for example) if set to false
  */
  repairable: boolean

  /**
     see NpcInteractionData in datacenter
  */
  flightInteractionType: number
  unkn1: boolean

  /**
     Info seats of vehicle NPCs
  */
  seats: S_SPAWN_NPC_11_seats[]
  parts: S_SPAWN_NPC_11_parts[]

  /**
     Internal name/description for debugging purposes
  */
  npcName: string
}
