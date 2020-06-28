import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class C_LOGIN_ARBITER_2 extends PacketBase {
  unk1: number
  unk2: number

  /**
     0 = INT, 1 = KOR, 2 = USA, 3 = JPN, 4 = GER, 5 = FRA, 6 = EUR, 7 = TW, 8 = RUS
  */
  language: number
  patchVersion: number
  name: string
  ticket: number[]
}
