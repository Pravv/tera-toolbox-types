import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class S_SEND_VIP_SYSTEM_INFO_1 extends PacketBase {
  enabled: boolean
  tier: number
  points1: number
  points2: number
  credits: bigint
  dailyCredits: boolean
  shopResetSec: bigint
  dungeonResetSec: bigint
  unk2: number
  unk3: string
}
