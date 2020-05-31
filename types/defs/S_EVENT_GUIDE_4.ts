import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  


export class S_EVENT_GUIDE_4_weeks_days {
  available: boolean
  claimed: boolean
  item: number
  amount: number
}

export class S_EVENT_GUIDE_4_weeks {
  time: bigint
  days: S_EVENT_GUIDE_4_weeks_days
}

export class S_EVENT_GUIDE_4_events {
  id: number
  start: bigint
  end: bigint
  caption: string
  description: string
}

export class S_EVENT_GUIDE_4 extends PacketBase {
  online: number
  weeks: S_EVENT_GUIDE_4_weeks
  events: S_EVENT_GUIDE_4_events
}
