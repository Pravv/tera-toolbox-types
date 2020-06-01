import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common';  


export class S_PLAY_ANIMATION_1 extends PacketBase {
  gameId: bigint
  rate: number
  duration: number
  blendTime: number
  animName: string
}
