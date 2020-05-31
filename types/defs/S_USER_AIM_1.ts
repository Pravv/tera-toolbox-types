import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class S_USER_AIM_1 extends PacketBase {
  gameId: bigint
  unk: number
  yaw: number
  pitch: number
  toYaw: number
  toPitch: number
  unk2: number
  unk3: number
}
