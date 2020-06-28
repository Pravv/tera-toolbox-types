// ﻿# majorPatchVersion >= 74
import { Vec3, SkillId, Customize, PacketBase } from '../lib/Common'


export class S_ACTION_END_5 extends PacketBase {
  gameId: bigint
  loc: Vec3
  w: number
  templateId: number
  skill: SkillId

  /**
     0 = Finished
  */
  type: number

  /**
     1 = Cancel (lockon)  2 = Cancel (movement/etc.)  3 = Special Interrupt (ex. Lancer: Shield Counter)  4 = Chain  5 = Retaliate  6 = Interrupt  10 = Button Release  11 = Button Release + Chain (ex. Mystic: Corruption Ring)  13 = Out of Stamina  19 = Invalid Target  25 = Unknown (ex. Command: Recall)  29 = Interrupted by Terrain (ex. entering water)  36 = Lockon Cast  37 = Interrupted by Loading  39 = Dash Finished  43 = Interrupted by Cutscene  49 = Unknown (HB uses this for Recall)  51 = Finished + Button Release (ex. Brawler: Counter)
  */
  id: number
}
