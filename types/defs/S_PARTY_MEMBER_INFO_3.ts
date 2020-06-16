import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_PARTY_MEMBER_INFO_3_members {
  playerId: number

  /**
     class -1
  */
  class: number
  race: number

  /**
     gender +1, 0 for baraka
  */
  gender: number
  level: number

  /**
     status? 1 or 0
  */
  unk2: number
  worldMapGuardId: number
  areaNameId: number

  /**
     order ?
  */
  unk3: number
  unk4: number
  unk5: number

  /**
     0 - 1
  */
  canInvite: number
  unk6: number
  name: string
}

export class S_PARTY_MEMBER_INFO_3 extends PacketBase {
  unk1: number
  members: S_PARTY_MEMBER_INFO_3_members[]
}
