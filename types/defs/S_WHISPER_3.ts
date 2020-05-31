import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class S_WHISPER_3 extends PacketBase {
  gameId: bigint
  isWorldEventTarget: boolean
  gm: boolean
  founder: boolean
  name: string
  recipient: string
  message: string
}
