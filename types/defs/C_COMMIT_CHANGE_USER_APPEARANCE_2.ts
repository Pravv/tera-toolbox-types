import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class C_COMMIT_CHANGE_USER_APPEARANCE_2 extends PacketBase {
  playerId: number
  race: number
  gender: number
  appearance: Customize

  /**
     100
  */
  unk: number
  details: number[]
  shape: number[]
}
