import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_PARTY_MEMBER_LIST_7_members {
  serverId: number
  playerId: number
  level: number

  /**
     0..12
  */
  class: number
  online: boolean
  gameId: bigint

  /**
     0..n
  */
  order: number

  /**
     ?
  */
  canInvite: number

  /**
     0..5 (none, bronze, silver, gold, diamond, champion)
  */
  laurel: number
  awakeningLevel: number
  name: string
}

export class S_PARTY_MEMBER_LIST_7 extends PacketBase {
  ims: boolean
  raid: boolean
  unk1: number

  /**
     unk2-4 are the same as unk1-3 in S_PARTY_INFO?
  */
  unk2: number
  unk3: number
  unk4: number
  leaderServerId: number
  leaderPlayerId: number

  /**
     1?
  */
  unk5: number

  /**
     1?
  */
  unk6: number

  /**
     0?
  */
  unk7: number

  /**
     1?
  */
  unk8: number

  /**
     0?
  */
  unk9: number

  /**
     1?
  */
  unk10: number

  /**
     0?
  */
  unk11: number
  members: S_PARTY_MEMBER_LIST_7_members[]
}
