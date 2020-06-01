import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common';  


export class S_APPLY_TITLE_3 extends PacketBase {
  gameId: bigint
  title: number
  titleCount: bigint
}
