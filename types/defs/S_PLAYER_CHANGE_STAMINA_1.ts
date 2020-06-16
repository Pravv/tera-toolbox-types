import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_PLAYER_CHANGE_STAMINA_1 extends PacketBase {
  /**
     this is used for RE, willpower, chi, etc
  */
  current: number
  max: number
  unk1: number
  unk2: number
  unk3: number
}
