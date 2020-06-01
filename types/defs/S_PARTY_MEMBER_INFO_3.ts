import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common';  


export class S_PARTY_MEMBER_INFO_3_members {
  playerId: number
  class: number
  race: number
  gender: number
  level: number
  unk2: number
  worldMapGuardId: number
  areaNameId: number
  unk3: number
  unk4: number
  unk5: number
  canInvite: number
  unk6: number
  name: string
}

export class S_PARTY_MEMBER_INFO_3 extends PacketBase {
  unk1: number
  members: S_PARTY_MEMBER_INFO_3_members
}
