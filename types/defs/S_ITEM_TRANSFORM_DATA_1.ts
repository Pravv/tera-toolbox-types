import {Vec3, SkillId, Customize, PacketBase} from '../lib/Common';  



export class S_ITEM_TRANSFORM_DATA_1 extends PacketBase {
  gameId: bigint
  item: number
  scale: number
  rotation: Vec3
  translation: Vec3
  translationDebug: Vec3
}
