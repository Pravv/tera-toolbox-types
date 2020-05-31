import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  


export class S_BATTLE_FIELD_RESULT_1_unk {
  unk1: number
  unk2: number
}

export class S_BATTLE_FIELD_RESULT_1 extends PacketBase {
  result: number
  rating: number
  unk: S_BATTLE_FIELD_RESULT_1_unk
}
