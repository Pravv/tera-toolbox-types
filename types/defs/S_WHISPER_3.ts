import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_WHISPER_3 extends PacketBase {
  gameId: bigint

  /**
     see S_SPAWN_USER
  */
  isWorldEventTarget: boolean
  gm: boolean

  /**
     CBT User. Early access set.
  */
  founder: boolean
  name: string
  recipient: string
  message: string
}
