// ﻿# majorPatchVersion >= 88
import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  


export class S_REQUEST_SERVANT_INFO_LIST_3_servants_giftedSkills {
  id: number
  changeable: boolean
}

export class S_REQUEST_SERVANT_INFO_LIST_3_servants_abilities {
  id: number
  active: boolean
}

export class S_REQUEST_SERVANT_INFO_LIST_3_servants {
  dbid: bigint
  type: number
  id: number
  level: number
  exp: number
  energy: number
  energyMax: number
  fellowship: number
  availableUntil: bigint
  slot: number
  styleItem: number
  unk1: number
  unk2: number
  restyleId: number
  name: string
  giftedSkills: S_REQUEST_SERVANT_INFO_LIST_3_servants_giftedSkills
  abilities: S_REQUEST_SERVANT_INFO_LIST_3_servants_abilities
}

export class S_REQUEST_SERVANT_INFO_LIST_3 extends PacketBase {
  slots: number
  servants: S_REQUEST_SERVANT_INFO_LIST_3_servants
}
