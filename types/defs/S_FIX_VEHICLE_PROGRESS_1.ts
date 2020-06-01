import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common';  


export class S_FIX_VEHICLE_PROGRESS_1 extends PacketBase {
  gameId: bigint
  percentage: number
  pointsPerSec: number
  broadcast: boolean
  repairingPlayers: number
  repairingPlayersMax: number
}
