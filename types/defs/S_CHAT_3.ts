import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_CHAT_3 extends PacketBase {
  /**
     see cChat.def
  */
  channel: number
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
  message: string
}
