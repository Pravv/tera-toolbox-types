import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class S_NAME_PREEMPTION_EVENT_INFO_2 extends PacketBase {
  unk1: number
  startDate: bigint
  endDate: bigint
  unk2: boolean
  unk3: boolean
}
