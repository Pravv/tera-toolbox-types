import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  


export class S_LIST_PARCEL_EX_2_messages_items {
  dbid: bigint
  id: number
  amount: number
  masterwork: boolean
  enigma: number
  enchant: number
}

export class S_LIST_PARCEL_EX_2_messages {
  id: number
  type: number
  status: number
  receiveTime: bigint
  attachedMoney: bigint
  codMoney: bigint
  expireTime: bigint
  read: boolean
  sender: string
  subject: string
  items: S_LIST_PARCEL_EX_2_messages_items
}

export class S_LIST_PARCEL_EX_2 extends PacketBase {
  type: number
  currentPage: number
  totalPages: number
  playerMessages: number
  messages: S_LIST_PARCEL_EX_2_messages
}
