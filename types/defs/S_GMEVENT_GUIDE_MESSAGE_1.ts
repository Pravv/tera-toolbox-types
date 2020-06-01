import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common';  


export class S_GMEVENT_GUIDE_MESSAGE_1 extends PacketBase {
  id: number
  type: number
  messageTime: bigint
  startTime: bigint
  remainingEntries: number
  hurryUp: boolean
  remainingPlayers: number
  name: string
}
