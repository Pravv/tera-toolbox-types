import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class S_INSTANT_DASH_3 extends PacketBase {
  gameId: bigint
  target: bigint
  unk: number
  loc: Vec3
}
