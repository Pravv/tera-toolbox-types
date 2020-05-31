import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  


export class S_PVP_LEADER_BOARD_INFO_1_battlefields {
  id: number
}

export class S_PVP_LEADER_BOARD_INFO_1 extends PacketBase {
  season: number
  seasonStart: bigint
  seasonEnd: bigint
  battlefields: S_PVP_LEADER_BOARD_INFO_1_battlefields
  unk: number
  unk2: number
}
