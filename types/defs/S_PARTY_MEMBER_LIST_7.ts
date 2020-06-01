import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common';  


export class S_PARTY_MEMBER_LIST_7_members {
  serverId: number
  playerId: number
  level: number
  class: number
  online: boolean
  gameId: bigint
  order: number
  canInvite: number
  laurel: number
  awakeningLevel: number
  name: string
}

export class S_PARTY_MEMBER_LIST_7 extends PacketBase {
  ims: boolean
  raid: boolean
  unk1: number
  unk2: number
  unk3: number
  unk4: number
  leaderServerId: number
  leaderPlayerId: number
  unk5: number
  unk6: number
  unk7: number
  unk8: number
  unk9: number
  unk10: number
  unk11: number
  members: S_PARTY_MEMBER_LIST_7_members
}
