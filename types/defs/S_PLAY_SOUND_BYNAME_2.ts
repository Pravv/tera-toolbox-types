import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class S_PLAY_SOUND_BYNAME_2 extends PacketBase {
  gameId: bigint
  unk: number
  loc: Vec3
}
