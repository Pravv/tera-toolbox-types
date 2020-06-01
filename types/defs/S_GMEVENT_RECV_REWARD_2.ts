import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common';  


export class S_GMEVENT_RECV_REWARD_2_items {
  id: number
  amount: number
}

export class S_GMEVENT_RECV_REWARD_2 extends PacketBase {
  eventType: number
  points: number
  category: number
  money: bigint
  exp: number
  talentExp: number
  unk1: number
  items: S_GMEVENT_RECV_REWARD_2_items
}
