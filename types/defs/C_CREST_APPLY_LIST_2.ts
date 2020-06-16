import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class C_CREST_APPLY_LIST_2 extends PacketBase {
  /**
     always false on modern clients since glyph reset is free
  */
  useResetItem: boolean
  glyphs: number[]
}
