import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class S_SEND_USER_PLAY_TIME_2 extends PacketBase {
  totalPlaytime: number
  localServerTime: bigint
}
