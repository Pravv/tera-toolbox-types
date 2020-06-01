import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_CHAT_3 extends PacketBase {
  channel: number
  gameId: bigint
  isWorldEventTarget: boolean
  gm: boolean
  founder: boolean
  name: string
  message: string
}
